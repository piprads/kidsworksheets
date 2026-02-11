// Script to download PDFs from K5 Learning and self-host them
// Run with: node download-pdfs.js

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// PDF URLs structure based on K5 Learning
const pdfUrls = {
    math: {
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
    reading: {
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
};

// Download a single PDF
function downloadPDF(url, filePath) {
    return new Promise((resolve, reject) => {
        const parsedUrl = new URL(url);
        const protocol = parsedUrl.protocol === 'https:' ? https : http;
        
        // Ensure directory exists
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // Skip if file already exists
        if (fs.existsSync(filePath)) {
            console.log(`  ⏭ Skipping (already exists): ${path.basename(filePath)}`);
            resolve(filePath);
            return;
        }

        const file = fs.createWriteStream(filePath);
        
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        };
        
        protocol.get(url, options, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                // Handle redirects
                file.close();
                return downloadPDF(response.headers.location, filePath)
                    .then(resolve)
                    .catch(reject);
            }
            
            if (response.statusCode !== 200) {
                file.close();
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
                reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
                return;
            }

            // Check content type
            const contentType = response.headers['content-type'];
            if (contentType && !contentType.includes('pdf') && !contentType.includes('application/octet-stream')) {
                file.close();
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
                reject(new Error(`Not a PDF: ${contentType}`));
                return;
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close();
                // Verify it's actually a PDF by checking file header
                const buffer = fs.readFileSync(filePath, { start: 0, end: 4 });
                if (buffer.toString() === '%PDF') {
                    resolve(filePath);
                } else {
                    fs.unlinkSync(filePath);
                    reject(new Error('Downloaded file is not a valid PDF'));
                }
            });
        }).on('error', (err) => {
            file.close();
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
            reject(err);
        });
    });
}

// Download all PDFs
async function downloadAllPDFs() {
    const downloaded = {};
    const failed = {};
    let total = 0;
    let success = 0;
    let fail = 0;

    for (const [category, grades] of Object.entries(pdfUrls)) {
        downloaded[category] = {};
        
        for (const [grade, topics] of Object.entries(grades)) {
            downloaded[category][grade] = {};
            
            for (const [topic, subtopics] of Object.entries(topics)) {
                downloaded[category][grade][topic] = {};
                
                for (const [subtopic, urls] of Object.entries(subtopics)) {
                    downloaded[category][grade][topic][subtopic] = [];
                    
                    for (let i = 0; i < urls.length; i++) {
                        const url = urls[i];
                        total++;
                        
                        // Create safe filename
                        const filename = path.basename(url);
                        const filePath = path.join(__dirname, 'pdfs', category, filename);
                        
                        try {
                            console.log(`Downloading [${success + fail + 1}/${total}]: ${filename}`);
                            await downloadPDF(url, filePath);
                            downloaded[category][grade][topic][subtopic].push({
                                url: `pdfs/${category}/${filename}`,
                                title: `Worksheet #${i + 1}`,
                                originalUrl: url
                            });
                            success++;
                            console.log(`✓ Downloaded: ${filename}`);
                        } catch (error) {
                            console.error(`✗ Failed: ${filename} - ${error.message}`);
                            fail++;
                            if (!failed[category]) failed[category] = {};
                            if (!failed[category][grade]) failed[category][grade] = {};
                            if (!failed[category][grade][topic]) failed[category][grade][topic] = {};
                            if (!failed[category][grade][topic][subtopic]) failed[category][grade][topic][subtopic] = [];
                            failed[category][grade][topic][subtopic].push(url);
                        }
                        
                        // Small delay to avoid overwhelming the server
                        await new Promise(resolve => setTimeout(resolve, 500));
                    }
                }
            }
        }
    }

    // Save downloaded structure
    fs.writeFileSync(
        path.join(__dirname, 'pdfs', 'downloaded-structure.json'),
        JSON.stringify(downloaded, null, 2)
    );

    // Save failed downloads
    if (Object.keys(failed).length > 0) {
        fs.writeFileSync(
            path.join(__dirname, 'pdfs', 'failed-downloads.json'),
            JSON.stringify(failed, null, 2)
        );
    }

    console.log(`\n=== Download Summary ===`);
    console.log(`Total: ${total}`);
    console.log(`Success: ${success}`);
    console.log(`Failed: ${fail}`);
    console.log(`\nStructure saved to: pdfs/downloaded-structure.json`);
    if (Object.keys(failed).length > 0) {
        console.log(`Failed downloads saved to: pdfs/failed-downloads.json`);
    }
    
    return downloaded;
}

// Run the download
if (require.main === module) {
    downloadAllPDFs()
        .then(() => {
            console.log('\n✓ All downloads completed!');
            process.exit(0);
        })
        .catch((error) => {
            console.error('\n✗ Error:', error);
            process.exit(1);
        });
}

module.exports = { downloadAllPDFs, downloadPDF };
