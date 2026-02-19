const fs = require('fs');
const path = require('path');

// Read the products.ts file
const productsContent = fs.readFileSync('src/data/products.ts', 'utf8');

// Extract all encodeImagePath calls
const regex = /encodeImagePath\("([^"]+)"\)/g;
const paths = new Set();
let match;

while ((match = regex.exec(productsContent)) !== null) {
  paths.add(match[1]);
}

const sortedPaths = Array.from(paths).sort();
console.log('Total unique image paths: ' + sortedPaths.length);
console.log('\nChecking if all image files exist...\n');

let missing = [];
let found = [];

sortedPaths.forEach(imagePath => {
  const actualPath = path.join('public', imagePath);
  if (fs.existsSync(actualPath)) {
    found.push(imagePath);
    console.log('✓ FOUND: ' + imagePath);
  } else {
    missing.push(imagePath);
    console.log('✗ MISSING: ' + imagePath);
  }
});

console.log('\n═════════════════════════════════════════');
console.log('Summary:');
console.log('Found: ' + found.length);
console.log('Missing: ' + missing.length);

if (missing.length > 0) {
  console.log('\nMissing files:');
  missing.forEach(p => console.log('  - ' + p));
}
