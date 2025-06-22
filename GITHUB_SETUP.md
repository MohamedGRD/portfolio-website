# GitHub Repository Setup Instructions

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Sign in to your GitHub account
3. Fill in the repository details:
   - Repository name: `portfolio-website`
   - Description: `Modern portfolio website with dark theme and animations`
   - Set to Public (required for GitHub Pages)
   - DO NOT initialize with README (we already have one)
4. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
git remote add origin https://github.com/MohamedGRD/portfolio-website.git
git branch -M main
git push -u origin main
```

## Step 3: Set Up GitHub Pages

1. Go to your repository: https://github.com/MohamedGRD/portfolio-website
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. GitHub will suggest a workflow - choose "Static HTML" or create a custom one

## Step 4: Create GitHub Actions Workflow

Create a file `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Step 5: Your Website Will Be Live

After pushing the workflow file, your website will be automatically built and deployed to:
`https://mohamedgrd.github.io/portfolio-website/`

## Quick Commands Summary

```bash
# Navigate to your portfolio directory
cd /path/to/portfolio-website

# Add GitHub remote
git remote add origin https://github.com/MohamedGRD/portfolio-website.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main

# Create workflow directory
mkdir -p .github/workflows

# Create the workflow file (copy content from Step 4)
# Then add and commit
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

## Updating Your Portfolio

To update your portfolio:
1. Edit the content in `src/App.jsx`
2. Test locally with `npm run dev`
3. Commit and push changes
4. GitHub Actions will automatically rebuild and deploy

Your portfolio will be live at: https://mohamedgrd.github.io/portfolio-website/

