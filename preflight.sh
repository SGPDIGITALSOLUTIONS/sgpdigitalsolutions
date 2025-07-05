#!/bin/sh

# Print current directory and environment info
echo "\n--- ENVIRONMENT INFO ---"
pwd
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# List important files
echo "\n--- PROJECT FILES ---"
ls -l

# Check for required config files
echo "\n--- CHECKING CONFIG FILES ---"
for f in package.json tailwind.config.js postcss.config.js; do
  if [ -f "$f" ]; then
    echo "[OK] $f found"
  else
    echo "[ERROR] $f NOT FOUND"
  fi
done

# Check for globals.css and layout.tsx
echo "\n--- CHECKING APP FILES ---"
if [ -f src/app/globals.css ]; then
  echo "[OK] src/app/globals.css found"
else
  echo "[ERROR] src/app/globals.css NOT FOUND"
fi
if [ -f src/app/layout.tsx ]; then
  echo "[OK] src/app/layout.tsx found"
else
  echo "[ERROR] src/app/layout.tsx NOT FOUND"
fi

# Print first 10 lines of globals.css
echo "\n--- globals.css (first 10 lines) ---"
head -10 src/app/globals.css

# Print Tailwind/PostCSS config

echo "\n--- tailwind.config.js ---"
cat tailwind.config.js

echo "\n--- postcss.config.js ---"
cat postcss.config.js

# Print dependency versions
echo "\n--- DEPENDENCY VERSIONS ---"
npm ls tailwindcss postcss autoprefixer next || echo "[ERROR] Some dependencies missing!"

# Clean build
echo "\n--- CLEANING .next BUILD CACHE ---"
rm -rf .next

# Start Next.js dev server
echo "\n--- STARTING NEXT.JS DEV SERVER ---"
npm run dev 