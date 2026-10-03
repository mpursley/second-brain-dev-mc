#!/bin/bash

# Ensure we're in the right directory
cd "$(dirname "$0")/.."

echo "Copying updated screenshots..."
cp -r ../../docs/company-docs/resources/app_screenshots/* public/resources/app_screenshots/

echo "Building the application..."
npm run build

echo "Build complete!"
