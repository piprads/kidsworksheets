#!/usr/bin/env python3
"""
Web crawler to find and download all PDFs from K5 Learning
Starts from https://www.k5learning.com/free-worksheets-for-kids
"""

import os
import json
import re
import urllib.request
import urllib.error
import urllib.parse
import ssl
from pathlib import Path
import time
from html.parser import HTMLParser
from collections import defaultdict

# Create SSL context
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

# Base URL
BASE_URL = "https://www.k5learning.com"
START_URL = "https://www.k5learning.com/free-worksheets-for-kids"

# Track visited URLs and found PDFs
visited_urls = set()
pdf_urls = defaultdict(lambda: defaultdict(lambda: defaultdict(lambda: defaultdict(list))))
all_pdf_links = []

class PDFLinkExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.current_tag = None
        self.current_href = None
        self.current_text = ""
        
    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        attrs_dict = dict(attrs)
        if tag == 'a' and 'href' in attrs_dict:
            self.current_href = attrs_dict['href']
            self.current_text = ""
        elif tag == 'img' and 'alt' in attrs_dict:
            # Sometimes PDF links are in image alt text
            pass
            
    def handle_data(self, data):
        if self.current_tag == 'a' and self.current_href:
            self.current_text += data.strip()
            
    def handle_endtag(self, tag):
        if tag == 'a' and self.current_href:
            href = self.current_href
            text = self.current_text.strip()
            
            # Check if it's a PDF link
            if href.endswith('.pdf') or '.pdf' in href.lower():
                self.links.append({
                    'url': href,
                    'text': text
                })
            
            self.current_href = None
            self.current_text = ""

def fetch_page(url):
    """Fetch a web page and return its content"""
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        
        with urllib.request.urlopen(req, timeout=30, context=ssl_context) as response:
            if response.status == 200:
                return response.read().decode('utf-8', errors='ignore')
            else:
                print(f"  ✗ Failed to fetch: HTTP {response.status}")
                return None
    except Exception as e:
        print(f"  ✗ Error fetching {url}: {str(e)}")
        return None

def extract_pdf_links(html_content, base_url):
    """Extract all PDF links from HTML content"""
    pdf_links = []
    
    # Use regex to find PDF links
    pdf_pattern = r'href=["\']([^"\']*\.pdf[^"\']*)["\']'
    matches = re.finditer(pdf_pattern, html_content, re.IGNORECASE)
    
    for match in matches:
        pdf_url = match.group(1)
        
        # Convert relative URLs to absolute
        if pdf_url.startswith('/'):
            pdf_url = BASE_URL + pdf_url
        elif not pdf_url.startswith('http'):
            pdf_url = urllib.parse.urljoin(base_url, pdf_url)
        
        # Extract link text if available
        # Look for text between <a> tags
        link_text = ""
        start_pos = match.start()
        # Find the opening <a> tag
        a_tag_start = html_content.rfind('<a', 0, start_pos)
        if a_tag_start != -1:
            a_tag_end = html_content.find('>', a_tag_start)
            if a_tag_end != -1:
                # Find closing </a> tag
                a_close = html_content.find('</a>', a_tag_end)
                if a_close != -1:
                    link_text = html_content[a_tag_end+1:a_close].strip()
                    # Clean up HTML tags from text
                    link_text = re.sub(r'<[^>]+>', '', link_text)
        
        pdf_links.append({
            'url': pdf_url,
            'text': link_text[:100] if link_text else os.path.basename(pdf_url)
        })
    
    return pdf_links

def extract_links(html_content, base_url):
    """Extract all links from HTML content"""
    links = []
    
    # Find all href attributes
    href_pattern = r'href=["\']([^"\']+)["\']'
    matches = re.finditer(href_pattern, html_content, re.IGNORECASE)
    
    for match in matches:
        link_url = match.group(1)
        
        # Skip PDFs, external links, and special links
        if link_url.endswith('.pdf') or link_url.startswith('http://') or link_url.startswith('https://'):
            if not link_url.startswith(BASE_URL):
                continue
        
        # Convert relative URLs to absolute
        if link_url.startswith('/'):
            link_url = BASE_URL + link_url
        elif not link_url.startswith('http'):
            link_url = urllib.parse.urljoin(base_url, link_url)
        
        # Only include K5 Learning links
        if BASE_URL in link_url and link_url not in visited_urls:
            links.append(link_url)
    
    return links

def categorize_pdf_url(pdf_url, pdf_text):
    """Categorize PDF URL based on its path and text"""
    url_lower = pdf_url.lower()
    text_lower = pdf_text.lower()
    
    category = "other"
    grade = "unknown"
    topic = "unknown"
    subtopic = "unknown"
    
    # Determine category
    if '/math/' in url_lower or 'math' in text_lower:
        category = "math"
    elif '/reading' in url_lower or 'reading' in text_lower or 'comprehension' in text_lower:
        category = "reading"
    elif '/kindergarten/' in url_lower or 'kindergarten' in text_lower:
        category = "kindergarten"
    elif '/vocabulary/' in url_lower or 'vocabulary' in text_lower:
        category = "vocabulary"
    elif '/spelling/' in url_lower or 'spelling' in text_lower:
        category = "spelling"
    elif '/grammar/' in url_lower or 'grammar' in text_lower or '/writing/' in url_lower:
        category = "grammar"
    elif '/science/' in url_lower or 'science' in text_lower:
        category = "science"
    elif '/cursive/' in url_lower or 'cursive' in text_lower:
        category = "cursive"
    elif '/flashcard' in url_lower or 'flashcard' in text_lower:
        category = "flashcards"
    
    # Determine grade
    grade_patterns = [
        (r'grade-?(\d+)', lambda m: f"Grade {m.group(1)}"),
        (r'kindergarten', 'Kindergarten'),
        (r'grade1', 'Grade 1'),
        (r'grade2', 'Grade 2'),
        (r'grade3', 'Grade 3'),
        (r'grade4', 'Grade 4'),
        (r'grade5', 'Grade 5'),
        (r'grade6', 'Grade 6'),
    ]
    
    for pattern, grade_name in grade_patterns:
        if isinstance(grade_name, str):
            if re.search(pattern, url_lower) or re.search(pattern, text_lower):
                grade = grade_name
                break
        else:
            match = re.search(pattern, url_lower) or re.search(pattern, text_lower)
            if match:
                grade = grade_name(match)
                break
    
    # Extract topic from URL or text
    filename = os.path.basename(pdf_url).replace('.pdf', '').replace('-', ' ').title()
    topic = filename
    
    # Try to extract subtopic
    if 'worksheet' in filename.lower():
        parts = filename.split()
        if len(parts) > 2:
            subtopic = ' '.join(parts[2:])
    
    return category, grade, topic, subtopic

def crawl_page(url, max_depth=3, current_depth=0):
    """Crawl a page and extract PDF links"""
    if current_depth > max_depth:
        return
    
    if url in visited_urls:
        return
    
    visited_urls.add(url)
    print(f"\n{'  ' * current_depth}[Depth {current_depth}] Crawling: {url}")
    
    html_content = fetch_page(url)
    if not html_content:
        return
    
    # Extract PDF links
    pdf_links = extract_pdf_links(html_content, url)
    
    for pdf_link in pdf_links:
        pdf_url = pdf_link['url']
        pdf_text = pdf_link['text']
        
        if pdf_url not in [p['url'] for p in all_pdf_links]:
            category, grade, topic, subtopic = categorize_pdf_url(pdf_url, pdf_text)
            
            pdf_info = {
                'url': pdf_url,
                'text': pdf_text,
                'category': category,
                'grade': grade,
                'topic': topic,
                'subtopic': subtopic
            }
            
            all_pdf_links.append(pdf_info)
            pdf_urls[category][grade][topic][subtopic].append(pdf_url)
            
            print(f"  ✓ Found PDF: {os.path.basename(pdf_url)} ({category}/{grade})")
    
    # Extract regular links to follow
    if current_depth < max_depth:
        links = extract_links(html_content, url)
        
        # Filter links - only follow worksheet-related pages
        worksheet_keywords = ['worksheet', 'math', 'reading', 'kindergarten', 'vocabulary', 
                            'spelling', 'grammar', 'science', 'cursive', 'flashcard', 'free']
        
        for link in links[:20]:  # Limit links per page to avoid too many requests
            link_lower = link.lower()
            if any(keyword in link_lower for keyword in worksheet_keywords):
                if link not in visited_urls:
                    time.sleep(0.5)  # Be polite
                    crawl_page(link, max_depth, current_depth + 1)

def download_pdf(url, file_path):
    """Download a single PDF file"""
    if os.path.exists(file_path):
        return True
    
    try:
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        
        with urllib.request.urlopen(req, timeout=30, context=ssl_context) as response:
            if response.status != 200:
                return False
            
            data = response.read()
            if not data.startswith(b'%PDF'):
                return False
            
            with open(file_path, 'wb') as f:
                f.write(data)
            
            return True
            
    except Exception as e:
        return False

def main():
    print("=" * 60)
    print("K5 Learning PDF Crawler and Downloader")
    print("=" * 60)
    print(f"\nStarting crawl from: {START_URL}")
    print("This may take a while...\n")
    
    # Start crawling
    crawl_page(START_URL, max_depth=4)
    
    print(f"\n\n{'=' * 60}")
    print(f"Crawl complete! Found {len(all_pdf_links)} PDFs")
    print(f"{'=' * 60}\n")
    
    # Save discovered PDFs
    base_dir = Path(__file__).parent / "pdfs"
    discovered_file = base_dir / "discovered-pdfs.json"
    
    with open(discovered_file, 'w') as f:
        json.dump({
            'all_pdfs': all_pdf_links,
            'organized': {k: {g: {t: {st: list(v) for st, v in st_dict.items()} 
                                  for t, st_dict in t_dict.items()} 
                            for g, t_dict in g_dict.items()} 
                          for k, g_dict in pdf_urls.items()}
        }, f, indent=2)
    
    print(f"Saved discovered PDFs to: {discovered_file}\n")
    
    # Now download all PDFs
    print("Starting download of all discovered PDFs...\n")
    
    downloaded = defaultdict(lambda: defaultdict(lambda: defaultdict(lambda: defaultdict(list))))
    total = len(all_pdf_links)
    success = 0
    fail = 0
    
    for pdf_info in all_pdf_links:
        pdf_url = pdf_info['url']
        category = pdf_info['category']
        grade = pdf_info['grade']
        topic = pdf_info['topic']
        subtopic = pdf_info['subtopic']
        
        filename = os.path.basename(pdf_url)
        file_path = base_dir / category / filename
        
        print(f"Downloading [{success + fail + 1}/{total}]: {filename}")
        
        if download_pdf(pdf_url, str(file_path)):
            downloaded[category][grade][topic][subtopic].append({
                "url": f"pdfs/{category}/{filename}",
                "title": pdf_info['text'] or f"Worksheet #{len(downloaded[category][grade][topic][subtopic]) + 1}",
                "originalUrl": pdf_url
            })
            success += 1
            print(f"  ✓ Downloaded: {filename}")
        else:
            fail += 1
            print(f"  ✗ Failed: {filename}")
        
        time.sleep(0.5)
    
    # Save downloaded structure
    structure_file = base_dir / "downloaded-structure.json"
    with open(structure_file, 'w') as f:
        json.dump(dict(downloaded), f, indent=2)
    
    print(f"\n{'=' * 60}")
    print(f"Download Summary")
    print(f"{'=' * 60}")
    print(f"Total PDFs found: {total}")
    print(f"Successfully downloaded: {success}")
    print(f"Failed: {fail}")
    print(f"\nStructure saved to: {structure_file}")
    print(f"{'=' * 60}\n")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nCrawl interrupted by user.")
    except Exception as e:
        print(f"\n✗ Error: {e}")
        import traceback
        traceback.print_exc()
