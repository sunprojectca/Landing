#!/bin/bash

echo "🚀 Deploying to AWS..."
aws s3 sync . s3://my-ferrum-site --exclude ".git/*" --exclude "deploy.sh" --exclude "README.md"
echo "✅ Done! Your site is live."
