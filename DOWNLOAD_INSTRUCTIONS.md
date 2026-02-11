# Download and Self-Host PDFs

## Quick Start

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/
   - Verify installation: `node --version`

2. **Run the download script**
   ```bash
   node download-pdfs.js
   ```

3. **Start the web server**
   ```bash
   python3 -m http.server 8000
   ```

4. **Open the Resources tab** in your browser
   - Navigate to http://localhost:8000
   - Click on the "Resources" tab
   - You'll see all downloaded PDFs organized by category

## How It Works

### Download Script (`download-pdfs.js`)
- Downloads PDFs from K5 Learning
- Saves them locally in the `pdfs/` directory
- Creates a `downloaded-structure.json` file mapping all PDFs
- Only downloads PDFs that are successfully accessible

### Resources Tab
- Reads from `pdfs/downloaded-structure.json`
- Only displays sections that have downloaded PDFs
- Links point to local PDFs (e.g., `pdfs/math/grade-1-counting-patterns-a.pdf`)
- All PDFs are self-hosted and always accessible

## Structure

PDFs are organized as:
```
pdfs/
├── math/
│   ├── grade-1-counting-patterns-a.pdf
│   ├── grade-1-counting-patterns-b.pdf
│   └── ...
├── reading/
│   └── ...
└── downloaded-structure.json
```

## Adding More PDFs

To add more PDF URLs to download:

1. Edit `download-pdfs.js`
2. Add URLs to the `pdfUrls` object following the structure:
   ```javascript
   "Category": {
       "Grade": {
           "Topic": {
               "Subtopic": [
                   "https://www.k5learning.com/worksheets/...",
                   // more URLs
               ]
           }
       }
   }
   ```
3. Run `node download-pdfs.js` again
4. The script will only download new PDFs that aren't already downloaded

## Example URL Pattern

Based on K5 Learning's structure:
- Math -> Grade 1 -> Number patterns -> Counting patterns
- URL: `https://www.k5learning.com/worksheets/math/grade-1-counting-patterns-a.pdf`
- Saved as: `pdfs/math/grade-1-counting-patterns-a.pdf`
- Accessible at: `http://localhost:8000/pdfs/math/grade-1-counting-patterns-a.pdf`

## Notes

- PDFs are large files - they're excluded from git (see `.gitignore`)
- The download script includes delays to avoid overwhelming the server
- Failed downloads are logged to `pdfs/failed-downloads.json`
- Only successfully downloaded PDFs appear in the Resources tab
