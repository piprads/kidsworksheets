# Resources Tab - K5 Learning PDFs

## Current Status

The Resources tab has been created with a complete organizational structure matching K5 Learning's website structure. The UI is fully functional with:

- ✅ Navigation tabs (Generator / Resources)
- ✅ Organized category structure (Math, Reading, Kindergarten, Vocabulary, Spelling, Grammar, Science, Cursive, Flashcards)
- ✅ Expandable/collapsible sections
- ✅ Search functionality
- ✅ Responsive design

## Structure

The resources are organized as follows:

```
Math Worksheets
├── By Grade
│   ├── Kindergarten
│   │   ├── Numbers & Counting
│   │   │   ├── Learning numbers → Worksheet #1, #2, etc.
│   │   │   ├── Counting → Worksheet #1, #2, etc.
│   │   │   └── ...
│   │   └── Simple Math
│   ├── Grade 1
│   ├── Grade 2
│   └── ...
└── By Topic
    ├── Numbers
    ├── 4 Operations
    └── ...

Reading Comprehension
├── By Grade
│   ├── Kindergarten
│   ├── Grade 1
│   └── ...
└── By Topic
    ├── Stories
    ├── Comprehension Exercises
    └── ...

[Similar structure for other categories]
```

## Populating PDF Links

Currently, the structure shows placeholder links. To populate with actual PDF links from K5 Learning:

### Option 1: Manual Entry
Edit `resources.js` and update the arrays in the `k5Resources` object with actual PDF URLs:

```javascript
"Learning numbers": [
    { url: "https://www.k5learning.com/worksheets/kindergarten/numbers/learning-numbers-1.pdf" },
    { url: "https://www.k5learning.com/worksheets/kindergarten/numbers/learning-numbers-2.pdf" },
    // ... more worksheets
]
```

### Option 2: Web Scraping
You can use a web scraping tool (like Puppeteer, BeautifulSoup, or a browser extension) to extract PDF links from:
- https://www.k5learning.com/free-math-worksheets
- https://www.k5learning.com/reading-comprehension-worksheets
- https://www.k5learning.com/free-preschool-kindergarten-worksheets
- etc.

### Option 3: API/Manual Collection
1. Visit each category page on K5 Learning
2. Collect PDF download links
3. Update the `resources.js` file with the collected links

## How to Add PDF Links

1. Open `resources.js`
2. Find the category and topic you want to update
3. Replace the empty array `[]` with an array of objects:

```javascript
"Learning numbers": [
    { url: "https://www.k5learning.com/path/to/worksheet1.pdf", title: "Learning Numbers 1-10" },
    { url: "https://www.k5learning.com/path/to/worksheet2.pdf", title: "Learning Numbers 11-20" },
    // Add more worksheets
]
```

The structure will automatically render all worksheets with download links.

## Features

- **Search**: Type in the search box to filter worksheets
- **Expand/Collapse**: Click on any section title to expand/collapse
- **Direct Links**: All PDFs open in a new tab
- **Organized**: Follows K5 Learning's exact structure

## Notes

- The placeholder links currently point to a generated URL structure
- Replace these with actual K5 Learning PDF URLs
- The structure supports unlimited worksheets per topic
- All links open in new tabs for easy downloading
