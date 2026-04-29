#!/bin/bash
echo "Updating content from doutrina-content..."
sudo rm -rf books 2>dev/null
sudo cp -r ../doutrina-content/books .

echo "Building Jekyll site..."
sudo rm -rf _site
sudo bundle exec jekyll build

echo "Done! Check _sitee/books/"
