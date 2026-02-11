#!/usr/bin/env python3
"""
Expanded PDF discovery - trying many more URL patterns
"""

import os
import json
import urllib.request
import ssl
from pathlib import Path
import time

ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

BASE_URL = "https://www.k5learning.com"

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
    except:
        return False

def generate_expanded_urls():
    """Generate many more potential PDF URLs"""
    urls = []
    
    # Math - Grade 1 - More patterns
    grade1_math = [
        ('addition', ['a', 'b', 'c', 'd', 'e', 'f']),
        ('subtraction', ['a', 'b', 'c', 'd', 'e', 'f']),
        ('addition-sentences', ['a', 'b', 'c', 'd', 'e']),
        ('subtraction-sentences', ['a', 'b', 'c', 'd', 'e']),
        ('counting-patterns', ['a', 'b', 'c', 'd', 'e']),
        ('number-patterns', ['a', 'b', 'c', 'd']),
        ('comparing-numbers', ['a', 'b', 'c']),
        ('place-value', ['a', 'b', 'c']),
        ('number-charts', ['a', 'b']),
        ('telling-time', ['a', 'b', 'c']),
        ('counting-money', ['a', 'b']),
        ('measurement', ['a', 'b']),
        ('geometry', ['a', 'b']),
        ('word-problems', ['a', 'b']),
    ]
    
    for topic, suffixes in grade1_math:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/math/grade-1-{topic}-{suffix}.pdf",
                'category': 'math',
                'grade': 'Grade 1',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Math - Grade 2
    grade2_math = [
        ('addition', ['a', 'b', 'c']),
        ('subtraction', ['a', 'b', 'c']),
        ('multiplication', ['a', 'b', 'c']),
        ('division', ['a', 'b']),
        ('place-value', ['a', 'b', 'c']),
        ('rounding', ['a', 'b']),
        ('fractions', ['a', 'b', 'c']),
        ('telling-time', ['a', 'b']),
        ('counting-money', ['a', 'b']),
        ('measurement', ['a', 'b']),
        ('geometry', ['a', 'b']),
    ]
    
    for topic, suffixes in grade2_math:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/math/grade-2-{topic}-{suffix}.pdf",
                'category': 'math',
                'grade': 'Grade 2',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Math - Grade 3
    grade3_math = [
        ('addition', ['a', 'b', 'c']),
        ('subtraction', ['a', 'b', 'c']),
        ('multiplication', ['a', 'b', 'c']),
        ('division', ['a', 'b', 'c']),
        ('place-value', ['a', 'b']),
        ('fractions', ['a', 'b', 'c']),
        ('decimals', ['a', 'b']),
        ('telling-time', ['a', 'b']),
        ('counting-money', ['a', 'b']),
        ('measurement', ['a', 'b']),
        ('geometry', ['a', 'b']),
    ]
    
    for topic, suffixes in grade3_math:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/math/grade-3-{topic}-{suffix}.pdf",
                'category': 'math',
                'grade': 'Grade 3',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Math - Grade 4
    grade4_math = [
        ('addition', ['a', 'b', 'c']),
        ('subtraction', ['a', 'b', 'c']),
        ('multiplication', ['a', 'b', 'c']),
        ('division', ['a', 'b', 'c']),
        ('fractions', ['a', 'b', 'c']),
        ('decimals', ['a', 'b', 'c']),
        ('place-value', ['a', 'b']),
        ('rounding', ['a', 'b']),
    ]
    
    for topic, suffixes in grade4_math:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/math/grade-4-{topic}-{suffix}.pdf",
                'category': 'math',
                'grade': 'Grade 4',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Reading - Grade 1
    grade1_reading = [
        ('childrens-stories', ['a', 'b', 'c', 'd']),
        ('leveled-stories', ['a', 'b', 'c']),
        ('fables', ['a', 'b', 'c']),
        ('context-clues', ['a', 'b']),
        ('cause-effect', ['a', 'b']),
        ('compare-contrast', ['a', 'b']),
        ('main-idea', ['a', 'b']),
        ('sequencing', ['a', 'b']),
        ('story-elements', ['a', 'b']),
        ('prediction', ['a', 'b']),
    ]
    
    for topic, suffixes in grade1_reading:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/reading-comprehension/grade-1-{topic}-{suffix}.pdf",
                'category': 'reading',
                'grade': 'Grade 1',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Reading - Grade 2
    grade2_reading = [
        ('childrens-stories', ['a', 'b', 'c', 'd']),
        ('leveled-stories', ['a', 'b', 'c']),
        ('fables', ['a', 'b', 'c']),
        ('context-clues', ['a', 'b']),
        ('cause-effect', ['a', 'b']),
        ('compare-contrast', ['a', 'b']),
        ('main-idea', ['a', 'b']),
        ('sequencing', ['a', 'b']),
    ]
    
    for topic, suffixes in grade2_reading:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/reading-comprehension/grade-2-{topic}-{suffix}.pdf",
                'category': 'reading',
                'grade': 'Grade 2',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Reading - Grade 3
    grade3_reading = [
        ('childrens-stories', ['a', 'b', 'c']),
        ('leveled-stories', ['a', 'b']),
        ('fables', ['a', 'b']),
        ('context-clues', ['a', 'b']),
    ]
    
    for topic, suffixes in grade3_reading:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/reading-comprehension/grade-3-{topic}-{suffix}.pdf",
                'category': 'reading',
                'grade': 'Grade 3',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Kindergarten
    kindergarten = [
        ('numbers', ['a', 'b']),
        ('counting', ['a', 'b']),
        ('addition', ['a', 'b']),
        ('subtraction', ['a', 'b']),
        ('shapes', ['a', 'b']),
        ('phonics', ['a', 'b']),
        ('sight-words', ['a', 'b']),
        ('letters', ['a', 'b']),
    ]
    
    for topic, suffixes in kindergarten:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/kindergarten/kindergarten-{topic}-{suffix}.pdf",
                'category': 'kindergarten',
                'grade': 'Kindergarten',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Vocabulary
    vocabulary = [
        ('word-meanings', ['a', 'b']),
        ('synonyms', ['a', 'b']),
        ('antonyms', ['a', 'b']),
        ('homophones', ['a', 'b']),
    ]
    
    for grade in [1, 2, 3]:
        for topic, suffixes in vocabulary:
            for suffix in suffixes:
                urls.append({
                    'url': f"{BASE_URL}/worksheets/vocabulary/grade-{grade}-{topic}-{suffix}.pdf",
                    'category': 'vocabulary',
                    'grade': f'Grade {grade}',
                    'topic': topic.replace('-', ' ').title(),
                    'subtopic': f'Worksheet {suffix.upper()}'
                })
    
    # Spelling
    for grade in [1, 2, 3, 4, 5]:
        for suffix in ['a', 'b', 'c']:
            urls.append({
                'url': f"{BASE_URL}/worksheets/spelling/grade-{grade}-spelling-{suffix}.pdf",
                'category': 'spelling',
                'grade': f'Grade {grade}',
                'topic': 'Spelling',
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    # Grammar
    grammar_topics = [
        ('nouns', ['a', 'b']),
        ('verbs', ['a', 'b']),
        ('adjectives', ['a', 'b']),
        ('adverbs', ['a', 'b']),
        ('pronouns', ['a', 'b']),
        ('sentences', ['a', 'b']),
        ('punctuation', ['a', 'b']),
    ]
    
    for grade in [1, 2, 3]:
        for topic, suffixes in grammar_topics:
            for suffix in suffixes:
                urls.append({
                    'url': f"{BASE_URL}/worksheets/grammar/grade-{grade}-{topic}-{suffix}.pdf",
                    'category': 'grammar',
                    'grade': f'Grade {grade}',
                    'topic': topic.replace('-', ' ').title(),
                    'subtopic': f'Worksheet {suffix.upper()}'
                })
    
    # Science
    science_topics = [
        ('plants', ['a', 'b']),
        ('animals', ['a', 'b']),
        ('weather', ['a', 'b']),
        ('seasons', ['a', 'b']),
    ]
    
    for grade in ['kindergarten', 1, 2, 3]:
        grade_str = 'kindergarten' if grade == 'kindergarten' else f'grade-{grade}'
        for topic, suffixes in science_topics:
            for suffix in suffixes:
                urls.append({
                    'url': f"{BASE_URL}/worksheets/science/{grade_str}-{topic}-{suffix}.pdf",
                    'category': 'science',
                    'grade': 'Kindergarten' if grade == 'kindergarten' else f'Grade {grade}',
                    'topic': topic.replace('-', ' ').title(),
                    'subtopic': f'Worksheet {suffix.upper()}'
                })
    
    # Cursive
    cursive_topics = [
        ('alphabet', ['a', 'b']),
        ('letters', ['a', 'b']),
        ('words', ['a', 'b']),
        ('sentences', ['a', 'b']),
    ]
    
    for topic, suffixes in cursive_topics:
        for suffix in suffixes:
            urls.append({
                'url': f"{BASE_URL}/worksheets/cursive-writing/cursive-{topic}-{suffix}.pdf",
                'category': 'cursive',
                'grade': 'All Grades',
                'topic': topic.replace('-', ' ').title(),
                'subtopic': f'Worksheet {suffix.upper()}'
            })
    
    return urls

def main():
    print("=" * 60)
    print("Expanded K5 Learning PDF Discovery")
    print("=" * 60)
    
    # Load existing structure
    base_dir = Path(__file__).parent / "pdfs"
    structure_file = base_dir / "downloaded-structure.json"
    existing = {}
    if structure_file.exists():
        with open(structure_file, 'r') as f:
            existing = json.load(f)
    
    # Generate URLs
    print("\nGenerating expanded PDF URLs...")
    all_urls = generate_expanded_urls()
    print(f"Generated {len(all_urls)} potential URLs\n")
    
    # Filter out already downloaded
    existing_urls = set()
    for cat in existing.values():
        for grade in cat.values():
            for topic in grade.values():
                for subtopic in topic.values():
                    for item in subtopic:
                        if 'originalUrl' in item:
                            existing_urls.add(item['originalUrl'])
    
    new_urls = [u for u in all_urls if u['url'] not in existing_urls]
    print(f"Testing {len(new_urls)} new URLs (skipping {len(all_urls) - len(new_urls)} already downloaded)\n")
    
    # Test and download
    downloaded = existing.copy()
    success = 0
    fail = 0
    
    for i, pdf_info in enumerate(new_urls):
        url = pdf_info['url']
        category = pdf_info['category']
        grade = pdf_info['grade']
        topic = pdf_info['topic']
        subtopic = pdf_info['subtopic']
        
        filename = os.path.basename(url)
        file_path = base_dir / category / filename
        
        print(f"[{i+1}/{len(new_urls)}] Testing: {filename}")
        
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
                
                success += 1
                print(f"  ✓ Downloaded")
            else:
                fail += 1
                print(f"  ✗ Download failed")
        else:
            fail += 1
            if i % 10 == 0:  # Only print every 10th failure to reduce output
                print(f"  ✗ Not found")
        
        time.sleep(0.2)
    
    # Save
    with open(structure_file, 'w') as f:
        json.dump(downloaded, f, indent=2)
    
    total_pdfs = sum(len(subtopic) for cat in downloaded.values() 
                     for grade in cat.values() 
                     for topic in grade.values() 
                     for subtopic in topic.values())
    
    print(f"\n{'=' * 60}")
    print(f"Summary")
    print(f"{'=' * 60}")
    print(f"New URLs tested: {len(new_urls)}")
    print(f"New downloads: {success}")
    print(f"Failed/Not found: {fail}")
    print(f"Total PDFs now: {total_pdfs}")
    print(f"{'=' * 60}\n")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nInterrupted.")
    except Exception as e:
        print(f"\n✗ Error: {e}")
        import traceback
        traceback.print_exc()
