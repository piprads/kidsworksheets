# GitHub Pages Setup Instructions

## Quick Setup (2 minutes)

Your code is ready! Just follow these steps:

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/piprads/kidsworksheets
2. Click on **Settings** (top right of the repository page)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

### Step 2: Wait for Deployment
- GitHub will take 1-2 minutes to build and deploy your site
- You'll see a green checkmark when it's ready
- Your site will be live at: **https://piprads.github.io/kidsworksheets/**

### Step 3: Verify
- Visit the URL above
- Your worksheet generator should be fully functional!

## Alternative: If you want to use a workflow (requires workflow scope in token)

If you want automatic deployments on every push, you'll need to:
1. Regenerate your Personal Access Token with the `workflow` scope
2. Then we can add the GitHub Actions workflow back

But the manual setup above works perfectly and is simpler!

## Troubleshooting

- **404 Error**: Wait a few minutes for GitHub to finish building
- **Site not updating**: Clear your browser cache or wait 5-10 minutes
- **Build failed**: Check the Actions tab in your repository for error messages
