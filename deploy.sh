#!/bin/bash

echo "🚀 Deploying to AWS..."
aws s3 sync . s3://my-ferrum-site --exclude ".git/*" --exclude "deploy.sh" --exclude "README.md" --exclude "node_modules/*" --exclude "src/*" --exclude ".svelte-kit/*" --exclude "package.json" --exclude "package-lock.json" --exclude "svelte.config.js" --exclude "vite.config.js" --exclude ".gitignore" --delete
echo "✅ Done! Your site is live."
