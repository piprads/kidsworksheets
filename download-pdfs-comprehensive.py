#!/usr/bin/env python3
"""
Comprehensive script to download PDFs from K5 Learning for all sections
Run with: python3 download-pdfs-comprehensive.py
"""

import os
import json
import urllib.request
import urllib.error
import ssl
from pathlib import Path
import time

# Create SSL context that doesn't verify certificates
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

# Comprehensive PDF URLs structure - trying many common K5 Learning patterns
pdf_urls = {
    "math": {
        "Kindergarten": {
            "Numbers & Counting": {
                "Learning numbers": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-numbers-counting.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-numbers-1-10.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-numbers-1-20.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-numbers-1-30.pdf"
                ],
                "Counting": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-counting.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-counting-objects.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-counting-to-10.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-counting-to-20.pdf"
                ]
            },
            "Simple Math": {
                "Addition": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-addition.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-simple-addition.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-addition-sentences.pdf"
                ],
                "Subtraction": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-subtraction.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-simple-subtraction.pdf"
                ],
                "Shapes": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-shapes.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-2d-shapes.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-3d-shapes.pdf"
                ]
            }
        },
        "Grade 1": {
            "Numbers": {
                "Learning numbers": [
                    "https://www.k5learning.com/worksheets/math/grade-1-numbers-1-100.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-number-words.pdf"
                ],
                "Counting": [
                    "https://www.k5learning.com/worksheets/math/grade-1-counting.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-counting-objects.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-counting-by-2s.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-counting-by-5s.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-counting-by-10s.pdf"
                ],
                "Comparing numbers": [
                    "https://www.k5learning.com/worksheets/math/grade-1-comparing-numbers.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-more-than-less-than.pdf"
                ],
                "Place Value": [
                    "https://www.k5learning.com/worksheets/math/grade-1-place-value.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-place-value-tens-ones.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-base-10-blocks.pdf"
                ]
            },
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
            "Addition": {
                "Addition": [
                    "https://www.k5learning.com/worksheets/math/grade-1-addition-sentences-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-addition-sentences-b.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-addition-number-lines.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-addition-single-digit.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-addition-doubles.pdf"
                ]
            },
            "Subtraction": {
                "Subtraction": [
                    "https://www.k5learning.com/worksheets/math/grade-1-subtraction-sentences-a.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-subtraction-sentences-b.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-subtraction-number-lines.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-subtraction-single-digit.pdf"
                ]
            },
            "Measurement": {
                "Length": [
                    "https://www.k5learning.com/worksheets/math/grade-1-measurement-length.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-measurement-compare-length.pdf"
                ],
                "Time": [
                    "https://www.k5learning.com/worksheets/math/grade-1-telling-time.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-time-hours.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-time-half-hours.pdf"
                ],
                "Money": [
                    "https://www.k5learning.com/worksheets/math/grade-1-counting-money.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-money-pennies-nickels.pdf"
                ]
            },
            "Geometry": {
                "Shapes": [
                    "https://www.k5learning.com/worksheets/math/grade-1-geometry-shapes.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-1-geometry-2d-shapes.pdf"
                ]
            }
        },
        "Grade 2": {
            "Numbers": {
                "Place Value": [
                    "https://www.k5learning.com/worksheets/math/grade-2-place-value.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-place-value-hundreds-tens-ones.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-place-value-expanded-form.pdf"
                ],
                "Rounding": [
                    "https://www.k5learning.com/worksheets/math/grade-2-rounding-numbers.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-rounding-to-nearest-10.pdf"
                ],
                "Skip Counting": [
                    "https://www.k5learning.com/worksheets/math/grade-2-skip-counting.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-skip-counting-by-2s.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-skip-counting-by-5s.pdf"
                ]
            },
            "Addition": {
                "Addition": [
                    "https://www.k5learning.com/worksheets/math/grade-2-addition.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-addition-2-digit-numbers.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-addition-mental-math.pdf"
                ]
            },
            "Subtraction": {
                "Subtraction": [
                    "https://www.k5learning.com/worksheets/math/grade-2-subtraction.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-subtraction-2-digit-numbers.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-subtraction-mental-math.pdf"
                ]
            },
            "Multiplication": {
                "Multiplication": [
                    "https://www.k5learning.com/worksheets/math/grade-2-multiplication.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-multiplication-tables.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-multiplication-2-times-table.pdf"
                ]
            },
            "Fractions": {
                "Fractions": [
                    "https://www.k5learning.com/worksheets/math/grade-2-fractions.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-2-fractions-equal-parts.pdf"
                ]
            }
        },
        "Grade 3": {
            "Numbers": {
                "Place Value": [
                    "https://www.k5learning.com/worksheets/math/grade-3-place-value.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-3-place-value-4-digit.pdf"
                ]
            },
            "Addition": {
                "Addition": [
                    "https://www.k5learning.com/worksheets/math/grade-3-addition.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-3-addition-3-digit.pdf"
                ]
            },
            "Subtraction": {
                "Subtraction": [
                    "https://www.k5learning.com/worksheets/math/grade-3-subtraction.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-3-subtraction-3-digit.pdf"
                ]
            },
            "Multiplication": {
                "Multiplication": [
                    "https://www.k5learning.com/worksheets/math/grade-3-multiplication.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-3-multiplication-tables.pdf"
                ]
            },
            "Division": {
                "Division": [
                    "https://www.k5learning.com/worksheets/math/grade-3-division.pdf",
                    "https://www.k5learning.com/worksheets/math/grade-3-division-facts.pdf"
                ]
            }
        }
    },
    "reading": {
        "Kindergarten": {
            "Early Reading": {
                "Phonics": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-phonics.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-beginning-sounds.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-ending-sounds.pdf"
                ],
                "Sight words": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-sight-words.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-dolch-sight-words.pdf"
                ],
                "Sentences": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-sentences.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-simple-sentences.pdf"
                ]
            },
            "Reading Comprehension": {
                "Reading Comprehension": [
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-reading-comprehension.pdf",
                    "https://www.k5learning.com/worksheets/kindergarten/kindergarten-reading-passages.pdf"
                ]
            }
        },
        "Grade 1": {
            "Stories": {
                "Children's stories": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-childrens-stories.pdf",
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-short-stories.pdf"
                ],
                "Leveled stories": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-leveled-stories.pdf"
                ],
                "Fables": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-fables.pdf"
                ]
            },
            "Comprehension Exercises": {
                "Context clues": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-context-clues.pdf"
                ],
                "Cause & effect": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-cause-effect.pdf"
                ],
                "Compare & contrast": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-compare-contrast.pdf"
                ]
            },
            "Story Structure": {
                "Main idea": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-main-idea.pdf"
                ],
                "Sequencing": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-1-sequencing.pdf"
                ]
            }
        },
        "Grade 2": {
            "Stories": {
                "Children's stories": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-2-childrens-stories.pdf"
                ]
            },
            "Comprehension Exercises": {
                "Context clues": [
                    "https://www.k5learning.com/worksheets/reading-comprehension/grade-2-context-clues.pdf"
                ]
            }
        }
    },
    "vocabulary": {
        "Grade 1": {
            "Vocabulary": {
                "Word meanings": [
                    "https://www.k5learning.com/worksheets/vocabulary/grade-1-word-meanings.pdf",
                    "https://www.k5learning.com/worksheets/vocabulary/grade-1-vocabulary-words.pdf"
                ],
                "Synonyms": [
                    "https://www.k5learning.com/worksheets/vocabulary/grade-1-synonyms.pdf"
                ],
                "Antonyms": [
                    "https://www.k5learning.com/worksheets/vocabulary/grade-1-antonyms.pdf"
                ]
            }
        },
        "Grade 2": {
            "Vocabulary": {
                "Word meanings": [
                    "https://www.k5learning.com/worksheets/vocabulary/grade-2-word-meanings.pdf"
                ]
            }
        }
    },
    "spelling": {
        "Grade 1": {
            "Spelling": {
                "Spelling lists": [
                    "https://www.k5learning.com/worksheets/spelling/grade-1-spelling-list.pdf",
                    "https://www.k5learning.com/worksheets/spelling/grade-1-spelling-words.pdf"
                ]
            }
        },
        "Grade 2": {
            "Spelling": {
                "Spelling lists": [
                    "https://www.k5learning.com/worksheets/spelling/grade-2-spelling-list.pdf"
                ]
            }
        }
    },
    "grammar": {
        "Grade 1": {
            "Grammar": {
                "Nouns": [
                    "https://www.k5learning.com/worksheets/grammar/grade-1-nouns.pdf",
                    "https://www.k5learning.com/worksheets/grammar/grade-1-nouns-singular-plural.pdf"
                ],
                "Verbs": [
                    "https://www.k5learning.com/worksheets/grammar/grade-1-verbs.pdf"
                ],
                "Adjectives": [
                    "https://www.k5learning.com/worksheets/grammar/grade-1-adjectives.pdf"
                ]
            }
        },
        "Grade 2": {
            "Grammar": {
                "Nouns": [
                    "https://www.k5learning.com/worksheets/grammar/grade-2-nouns.pdf"
                ],
                "Verbs": [
                    "https://www.k5learning.com/worksheets/grammar/grade-2-verbs.pdf"
                ]
            }
        }
    },
    "science": {
        "Kindergarten": {
            "Science": {
                "Plants": [
                    "https://www.k5learning.com/worksheets/science/kindergarten-plants.pdf"
                ],
                "Animals": [
                    "https://www.k5learning.com/worksheets/science/kindergarten-animals.pdf"
                ],
                "Weather": [
                    "https://www.k5learning.com/worksheets/science/kindergarten-weather.pdf"
                ]
            }
        },
        "Grade 1": {
            "Science": {
                "Plants": [
                    "https://www.k5learning.com/worksheets/science/grade-1-plants.pdf"
                ],
                "Animals": [
                    "https://www.k5learning.com/worksheets/science/grade-1-animals.pdf"
                ]
            }
        }
    },
    "cursive": {
        "Cursive Writing": {
            "Cursive alphabet": {
                "Cursive letters": [
                    "https://www.k5learning.com/worksheets/cursive-writing/cursive-alphabet.pdf",
                    "https://www.k5learning.com/worksheets/cursive-writing/cursive-letters-a-z.pdf"
                ]
            },
            "Cursive words": {
                "Cursive words": [
                    "https://www.k5learning.com/worksheets/cursive-writing/cursive-words.pdf"
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
    # Load existing structure if it exists
    base_dir = Path(__file__).parent / "pdfs"
    existing_structure = {}
    structure_file = base_dir / "downloaded-structure.json"
    
    if structure_file.exists():
        with open(structure_file, 'r') as f:
            existing_structure = json.load(f)
    
    downloaded = existing_structure.copy() if existing_structure else {}
    failed = {}
    total = 0
    success = 0
    fail = 0
    
    for category, grades in pdf_urls.items():
        if category not in downloaded:
            downloaded[category] = {}
        
        for grade, topics in grades.items():
            if grade not in downloaded[category]:
                downloaded[category][grade] = {}
            
            for topic, subtopics in topics.items():
                if topic not in downloaded[category][grade]:
                    downloaded[category][grade][topic] = {}
                
                for subtopic, urls in subtopics.items():
                    if subtopic not in downloaded[category][grade][topic]:
                        downloaded[category][grade][topic][subtopic] = []
                    
                    # Check existing downloads
                    existing_urls = {item.get('originalUrl') for item in downloaded[category][grade][topic][subtopic] if item.get('originalUrl')}
                    
                    for i, url in enumerate(urls):
                        if url in existing_urls:
                            continue  # Skip already downloaded
                            
                        total += 1
                        filename = os.path.basename(url)
                        file_path = base_dir / category / filename
                        
                        print(f"Downloading [{success + fail + 1}/{total}]: {filename}")
                        
                        if download_pdf(url, str(file_path)):
                            downloaded[category][grade][topic][subtopic].append({
                                "url": f"pdfs/{category}/{filename}",
                                "title": f"Worksheet #{len(downloaded[category][grade][topic][subtopic]) + 1}",
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
    print("Starting comprehensive PDF download from K5 Learning...\n")
    try:
        download_all_pdfs()
        print("\n✓ All downloads completed!")
    except KeyboardInterrupt:
        print("\n\nDownload interrupted by user.")
    except Exception as e:
        print(f"\n✗ Error: {e}")
