#!/usr/bin/env python3
"""
Direct PDF URL discovery based on known patterns from K5 Learning
Since PDFs are not directly linked in HTML, we'll use known URL patterns
"""

import os
import json
import urllib.request
import urllib.error
import ssl
from pathlib import Path
import time
import re

ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

BASE_URL = "https://www.k5learning.com"

# Known working pattern: /worksheets/math/grade-1-counting-patterns-a.pdf
# Let's try to discover more by testing common patterns

def test_pdf_url(url):
    """Test if a PDF URL exists"""
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        
        with urllib.request.urlopen(req, timeout=10, context=ssl_context) as response:
            if response.status == 200:
                data = response.read()
                if data.startswith(b'%PDF'):
                    return True, len(data)
        return False, 0
    except:
        return False, 0

def generate_pdf_urls():
    """Generate potential PDF URLs based on known patterns"""
    urls = []
    
    # Math worksheets - Grade 1
    math_grade1_topics = [
        ('counting-patterns', ['a', 'b', 'c', 'd', 'e', 'f']),
        ('number-patterns', ['a', 'b', 'c', 'd']),
        ('addition-sentences', ['a', 'b', 'c', 'd']),
        ('subtraction-sentences', ['a', 'b', 'c', 'd']),
        ('addition-number-lines', ['a', 'b']),
        ('subtraction-number-lines', ['a', 'b']),
        ('addition-single-digit', ['a', 'b', 'c']),
        ('subtraction-single-digit', ['a', 'b', 'c']),
        ('comparing-numbers', ['a', 'b', 'c']),
        ('place-value-tens-ones', ['a', 'b', 'c']),
        ('counting-objects', ['a', 'b', 'c']),
        ('number-words', ['a', 'b']),
        ('skip-counting', ['a', 'b']),
    ]
    
    for topic, suffixes in math_grade1_topics:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/math/grade-1-{topic}-{suffix}.pdf",
                'category': 'math',
                'grade': 'Grade 1',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Math worksheets - Grade 2
    math_grade2_topics = [
        ('place-value-hundreds-tens-ones', ['a', 'b', 'c']),
        ('rounding-numbers', ['a', 'b', 'c']),
        ('addition-2-digit-numbers', ['a', 'b', 'c']),
        ('subtraction-2-digit-numbers', ['a', 'b', 'c']),
        ('skip-counting', ['a', 'b']),
        ('multiplication-tables', ['a', 'b']),
        ('fractions', ['a', 'b']),
    ]
    
    for topic, suffixes in math_grade2_topics:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/math/grade-2-{topic}-{suffix}.pdf",
                'category': 'math',
                'grade': 'Grade 2',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Math worksheets - Grade 3
    math_grade3_topics = [
        ('addition-3-digit', ['a', 'b', 'c']),
        ('subtraction-3-digit', ['a', 'b', 'c']),
        ('multiplication-tables', ['a', 'b']),
        ('division-facts', ['a', 'b']),
        ('place-value-4-digit', ['a', 'b']),
    ]
    
    for topic, suffixes in math_grade3_topics:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/math/grade-3-{topic}-{suffix}.pdf",
                'category': 'math',
                'grade': 'Grade 3',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Reading worksheets - Grade 1
    reading_grade1_topics = [
        ('childrens-stories', ['a', 'b', 'c']),
        ('leveled-stories', ['a', 'b']),
        ('fables', ['a', 'b']),
        ('context-clues', ['a', 'b']),
        ('cause-effect', ['a', 'b']),
        ('compare-contrast', ['a', 'b']),
        ('main-idea', ['a', 'b']),
        ('sequencing', ['a', 'b']),
    ]
    
    for topic, suffixes in reading_grade1_topics:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/reading-comprehension/grade-1-{topic}-{suffix}.pdf",
                'category': 'reading',
                'grade': 'Grade 1',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Reading worksheets - Grade 2
    reading_grade2_topics = [
        ('childrens-stories', ['a', 'b', 'c']),
        ('leveled-stories', ['a', 'b']),
        ('fables', ['a', 'b']),
        ('context-clues', ['a', 'b']),
    ]
    
    for topic, suffixes in reading_grade2_topics:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/reading-comprehension/grade-2-{topic}-{suffix}.pdf",
                'category': 'reading',
                'grade': 'Grade 2',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Kindergarten worksheets
    kindergarten_topics = [
        ('numbers-counting', ['a', 'b']),
        ('addition', ['a', 'b']),
        ('subtraction', ['a', 'b']),
        ('shapes', ['a', 'b']),
        ('phonics', ['a', 'b']),
        ('sight-words', ['a', 'b']),
    ]
    
    for topic, suffixes in kindergarten_topics:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/kindergarten/kindergarten-{topic}-{suffix}.pdf",
                'category': 'kindergarten',
                'grade': 'Kindergarten',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    return urls

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
    print("K5 Learning PDF Discovery and Download")
    print("=" * 60)
    
    # Generate potential URLs
    print("\nGenerating potential PDF URLs based on known patterns...")
    all_urls = generate_pdf_urls()
    print(f"Generated {len(all_urls)} potential URLs\n")
    
    # Test and download
    base_dir = Path(__file__).parent / "pdfs"
    downloaded = {}
    discovered = []
    
    total = len(all_urls)
    success = 0
    fail = 0
    
    print("Testing and downloading PDFs...\n")
    
    for i, pdf_info in enumerate(all_urls):
        url = pdf_info['url']
        category = pdf_info['category']
        grade = pdf_info['grade']
        topic = pdf_info['topic']
        subtopic = pdf_info['subtopic']
        
        filename = os.path.basename(url)
        file_path = base_dir / category / filename
        
        print(f"[{i+1}/{total}] Testing: {filename}")
        
        exists, size = test_pdf_url(url)
        
        if exists:
            print(f"  ✓ PDF exists ({size} bytes), downloading...")
            
            if download_pdf(url, str(file_path)):
                if category not in downloaded:
                    downloaded[category] = {}
                if grade not in downloaded[category]:
                    downloaded[category][grade] = {}
                if topic not in downloaded[category][grade]:
                    downloaded[category][grade][topic] = {}
                if subtopic not in downloaded[category][grade][topic]:
                    downloaded[category][grade][topic][subtopic] = []
                
                downloaded[category][grade][topic][subtopic].append({
                    "url": f"pdfs/{category}/{filename}",
                    "title": f"Worksheet {subtopic}",
                    "originalUrl": url
                })
                
                discovered.append(pdf_info)
                success += 1
                print(f"  ✓ Downloaded successfully")
            else:
                fail += 1
                print(f"  ✗ Download failed")
        else:
            fail += 1
            print(f"  ✗ Not found (404)")
        
        time.sleep(0.3)  # Be polite
    
    # Save results
    structure_file = base_dir / "downloaded-structure.json"
    with open(structure_file, 'w') as f:
        json.dump(downloaded, f, indent=2)
    
    discovered_file = base_dir / "discovered-pdfs.json"
    with open(discovered_file, 'w') as f:
        json.dump(discovered, f, indent=2)
    
    print(f"\n{'=' * 60}")
    print(f"Summary")
    print(f"{'=' * 60}")
    print(f"Total URLs tested: {total}")
    print(f"Successfully downloaded: {success}")
    print(f"Failed/Not found: {fail}")
    print(f"\nStructure saved to: {structure_file}")
    print(f"Discovered PDFs saved to: {discovered_file}")
    print(f"{'=' * 60}\n")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nInterrupted by user.")
    except Exception as e:
        print(f"\n✗ Error: {e}")
        import traceback
        traceback.print_exc()
