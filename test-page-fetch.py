#!/usr/bin/env python3
"""Test script to examine page structure"""

import urllib.request
import ssl
import re

ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

url = "https://www.k5learning.com/free-math-worksheets/first-grade-1"

req = urllib.request.Request(url, headers={
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
})

with urllib.request.urlopen(req, timeout=30, context=ssl_context) as response:
    html = response.read().decode('utf-8', errors='ignore')
    
    # Look for PDF links
    pdf_links = re.findall(r'href=["\']([^"\']*\.pdf[^"\']*)["\']', html, re.IGNORECASE)
    print(f"Found {len(pdf_links)} PDF links:")
    for link in pdf_links[:10]:
        print(f"  {link}")
    
    # Look for worksheet links
    worksheet_links = re.findall(r'href=["\']([^"\']*worksheet[^"\']*)["\']', html, re.IGNORECASE)
    print(f"\nFound {len(worksheet_links)} worksheet links:")
    for link in worksheet_links[:10]:
        print(f"  {link}")
    
    # Save HTML to file for inspection
    with open('test-page.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("\nSaved HTML to test-page.html for inspection")
