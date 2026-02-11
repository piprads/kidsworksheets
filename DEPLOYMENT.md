# Deployment Instructions

## Quick Setup Commands

### 1. Initialize Git Repository
```bash
cd /Users/radheshg/Documents/vibecoding/personalagent
git init
```

### 2. Add All Files
```bash
git add .
```

### 3. Create Initial Commit
```bash
git commit -m "Initial commit: Kids Worksheet Generator with ICSE curriculum"
```

### 4. Add Remote Repository
Replace `YOUR_REPO_URL` with your actual repository URL:
```bash
git remote add origin YOUR_REPO_URL
```

### 5. Push to Repository
```bash
git branch -M main
git push -u origin main
```

## If Repository Doesn't Exist Yet

### GitHub:
1. Go to https://github.com/new
2. Create a new repository (e.g., `worksheet-generator`)
3. Don't initialize with README, .gitignore, or license
4. Copy the repository URL
5. Use the commands above

### GitLab:
1. Go to https://gitlab.com/projects/new
2. Create a new project
3. Copy the repository URL
4. Use the commands above

## Notes:
- PDFs are excluded by `.gitignore` (they're large files)
- The `pdfs-structure-embedded.js` file is included (needed for the Resources tab)
- All HTML, CSS, and JavaScript files are included
