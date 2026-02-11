# Kids Worksheet Generator

A simple web application for parents to generate printable worksheets for 4-8 year old kids based on the ICSE syllabus.

## Features

- 📚 **ICSE Curriculum Based**: Worksheets aligned with ICSE syllabus
- 🎯 **Multiple Subjects**: Mathematics, English, Hindi, and General Knowledge
- 📝 **20 Questions per Page**: Dense, print-friendly worksheets
- 🎨 **Print Optimized**: Clean, single-page printing with no headers/footers
- 🔄 **Unique Questions**: Ensures no repeated questions in each worksheet
- 📊 **Difficulty Levels**: Easy, Medium, and Hard options
- 👶 **Age Groups**: 4-5 years, 6-7 years, and 7-8 years
- 📚 **Resources Tab**: Access to free educational PDFs from K5 Learning

## How to Use

1. Select the **Age Group** (4-5, 6-7, or 7-8 years)
2. Choose a **Subject** (Mathematics, English, Hindi, or General Knowledge)
3. Pick a **Topic** from the ICSE curriculum
4. Select **Difficulty Level** (Easy, Medium, or Hard)
5. Click **Generate Worksheet** to create your printable worksheet
6. Click **Print Worksheet** to print or save as PDF

## Live Website

Visit the live website: [https://piprads.github.io/kidsworksheets/](https://piprads.github.io/kidsworksheets/)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/piprads/kidsworksheets.git
   cd kidsworksheets
   ```

2. Open `index.html` in your web browser, or use a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit: http://localhost:8000

## Project Structure

- `index.html` - Main HTML file
- `styles.css` - Styling and layout
- `script.js` - Worksheet generation logic
- `resources.js` - Resources tab functionality
- `pdfs-structure-embedded.js` - Embedded PDF structure for offline access

## License

This project is open source and available for personal and educational use.
