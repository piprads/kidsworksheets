#!/usr/bin/env python3
"""
Script to download PDFs from K5 Learning and self-host them
Run with: python3 download-pdfs.py
"""

import os
import json
import urllib.request
import urllib.error
import ssl
from pathlib import Path
import time

# Create SSL context that doesn't verify certificates (for downloading from trusted sites)
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

# PDF URLs structure based on K5 Learning
pdf_urls = {
    "math": {
        "Grade 1": {
            "Number patterns": {
                "Counting patterns": [
                    "https://www.k5learning.com/worksheets/math/grade-1-counting-patterns-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-counting-patterns-b.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-counting-patterns-c.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-counting-patterns-d.pdf"
                ],
                "Number patterns": [
                    "https://www.k5learning.com/worksheets/math/grade-1-number-patterns-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-number-patterns-b.pdf"
                ]
            },
            "Numbers": {
                "Learning numbers": [
                    "https://www.k5learning.com/worksheets/math/grade-1-learning-numbers-1.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-learning-numbers-2.pdf"
                ],
                "Counting": [
                    "https://www.k5learning.com/worksheets/math/grade-1-counting-objects-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-counting-objects-b.pdf"
                ],
                "Comparing numbers": [
                    "https://www.k5learning.com/worksheets/math/grade-1-comparing-numbers-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-comparing-numbers-b.pdf"
                ],
                "Place Value": [
                    "https://www.k5learning.com/worksheets/math/grade-1-place-value-tens-ones-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-place-value-tens-ones-b.pdf"
                ]
            },
            "Addition": {
                "Addition": [
                    "https://www.k5learning.com/worksheets/math/grade-1-addition-sentences-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-addition-sentences-b.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-addition-number-lines-a.pdf"
                ]
            },
            "Subtraction": {
                "Subtraction": [
                    "https://www.k5learning.com/worksheets/math/grade-1-subtraction-sentences-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-subtraction-sentences-b.pdf"
                ]
            }
        },
        "Grade 2": {
            "Numbers": {
                "Place Value": [
                    "https://www.k5learning.com/worksheets/math/grade-2-place-value-hundreds-tens-ones-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-place-value-hundreds-tens-ones-b.pdf"
                ],
                "Rounding": [
                    "https://www.k5learning.com/worksheets/math/grade-2-rounding-numbers-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-rounding-numbers-b.pdf"
                ]
            },
            "Addition": {
                "Addition": [
                    "https://www.k5learning.com/worksheets/math/grade-2-addition-2-digit-numbers-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-addition-2-digit-numbers-b.pdf"
                ]
            },
            "Subtraction": {
                "Subtraction": [
                    "https://www.k5learning.com/worksheets/math/grade-2-subtraction-2-digit-numbers-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-subtraction-2-digit-numbers-b.pdf"
                ]
            }
        },
        "Kindergarten": {
            "Numbers & Counting": {
                "Learning numbers": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-numbers-counting-worksheet.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-numbers-1-10-worksheet.pdf"
                ],
                "Counting": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-counting-worksheet.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-counting-objects-worksheet.pdf"
                ]
            },
            "Simple Math": {
                "Addition": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-addition-worksheet.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-simple-addition-worksheet.pdf"
                ],
                "Subtraction": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-subtraction-worksheet.pdf"
                ]
            }
        }
    },
    "reading": {
        "Grade 1": {
            "Stories": {
                "Children's stories": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-childrens-stories-a.pdf",
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-childrens-stories-b.pdf"
                ]
            },
            "Comprehension Exercises": {
                "Context clues": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-context-clues-a.pdf"
                ]
            }
        },
        "Kindergarten": {
            "Early Reading": {
                "Phonics": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-phonics-worksheet.pdf"
                ],
                "Sight words": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-sight-words-worksheet.pdf"
                ]
            }
        }
    }
}

def download_pdf(url, file_path):
    """Download a single PDF file"""
    # Skip if file already exists
    if os.path.exists(file_path):
        print(f"  ⏭ Skipping (already exists): {os.path.basename(file_path)}")
        return True
    
    try:
        # Create directory if it doesn't exist
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        
        # Create request with User-Agent header
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        
        # Download the file with SSL context
        with urllib.request.urlopen(req, timeout=30, context=ssl_context) as response:
            # Check status code
            if response.status != 200:
                print(f"  ✗ Failed: HTTP {response.status}")
                return False
            
            # Check content type
            content_type = response.headers.get('Content-Type', '')
            if 'pdf' not in content_type.lower() and 'application/octet-stream' not in content_type.lower():
                print(f"  ✗ Failed: Not a PDF (Content-Type: {content_type})")
                return False
            
            # Read and save the file
            data = response.read()
            
            # Verify it's a PDF by checking header
            if not data.startswith(b'%PDF'):
                print(f"  ✗ Failed: Downloaded file is not a valid PDF")
                return False
            
            # Save the file
            with open(file_path, 'wb') as f:
                f.write(data)
            
            return True
            
    except urllib.error.HTTPError as e:
        print(f"  ✗ Failed: HTTP {e.code} - {e.reason}")
        return False
    except urllib.error.URLError as e:
        print(f"  ✗ Failed: {e.reason}")
        return False
    except Exception as e:
        print(f"  ✗ Failed: {str(e)}")
        return False

def download_all_pdfs():
    """Download all PDFs from the structure"""
    downloaded = {}
    failed = {}
    total = 0
    success = 0
    fail = 0
    
    base_dir = Path(__file__).parent / "pdfs"
    
    for category, grades in pdf_urls.items():
        downloaded[category] = {}
        
        for grade, topics in grades.items():
            downloaded[category][grade] = {}
            
            for topic, subtopics in topics.items():
                downloaded[category][grade][topic] = {}
                
                for subtopic, urls in subtopics.items():
                    downloaded[category][grade][topic][subtopic] = []
                    
                    for i, url in enumerate(urls):
                        total += 1
                        filename = os.path.basename(url)
                        file_path = base_dir / category / filename
                        
                        print(f"Downloading [{success + fail + 1}/{total}]: {filename}")
                        
                        if download_pdf(url, str(file_path)):
                            downloaded[category][grade][topic][subtopic].append({
                                "url": f"pdfs/{category}/{filename}",
                                "title": f"Worksheet #{i + 1}",
                                "originalUrl": url
                            })
                            success += 1
                            print(f"  ✓ Downloaded: {filename}")
                        else:
                            fail += 1
                            if category not in failed:
                                failed[category] = {}
                            if grade not in failed[category]:
                                failed[category][grade] = {}
                            if topic not in failed[category][grade]:
                                failed[category][grade][topic] = {}
                            if subtopic not in failed[category][grade][topic]:
                                failed[category][grade][topic][subtopic] = []
                            failed[category][grade][topic][subtopic].append(url)
                        
                        # Small delay to avoid overwhelming the server
                        time.sleep(0.5)
    
    # Save downloaded structure
    structure_file = base_dir / "downloaded-structure.json"
    with open(structure_file, 'w') as f:
        json.dump(downloaded, f, indent=2)
    
    # Save failed downloads
    if failed:
        failed_file = base_dir / "failed-downloads.json"
        with open(failed_file, 'w') as f:
            json.dump(failed, f, indent=2)
    
    print(f"\n=== Download Summary ===")
    print(f"Total: {total}")
    print(f"Success: {success}")
    print(f"Failed: {fail}")
    print(f"\nStructure saved to: {structure_file}")
    if failed:
        print(f"Failed downloads saved to: {base_dir / 'failed-downloads.json'}")
    
    return downloaded

if __name__ == "__main__":
    print("Starting PDF download from K5 Learning...\n")
    try:
        download_all_pdfs()
        print("\n✓ All downloads completed!")
    except KeyboardInterrupt:
        print("\n\nDownload interrupted by user.")
    except Exception as e:
        print(f"\n✗ Error: {e}")
