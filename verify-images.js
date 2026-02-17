const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, 'src/data/products.ts');
const publicProductsDir = path.join(__dirname, 'public/products');

const content = fs.readFileSync(productsFile, 'utf8');

// Regex to find all encodeImagePath calls
const regex = /encodeImagePath\("([^"]+)"\)/g;
let match;
const usedImages = new Set();

while ((match = regex.exec(content)) !== null) {
    usedImages.add(match[1]);
}

console.log(`Found ${usedImages.size} unique images in products.ts`);

const missingImages = [];
usedImages.forEach(img => {
    // Relative path from public/
    const relativePath = img.replace(/^\/products\//, '');
    const fullPath = path.join(publicProductsDir, relativePath);
    if (!fs.existsSync(fullPath)) {
        missingImages.push(img);
    }
});

if (missingImages.length > 0) {
    console.log('\nMissing Images:');
    missingImages.forEach(img => console.log(`- ${img}`));
} else {
    console.log('\nAll images found on disk!');
}

// Check for unused images on disk
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

const allDiskFiles = getAllFiles(publicProductsDir);
const unusedImages = [];

allDiskFiles.forEach(file => {
    const relativeToPublic = file.replace(__dirname, '').replace(/\\/g, '/').replace(/^\/(public\/)?/, '/');
    if (!usedImages.has(relativeToPublic)) {
        // Some used images might not have encodeImagePath around them if I missed a regex, but in this file they all seem to.
        unusedImages.push(relativeToPublic);
    }
});

if (unusedImages.length > 0) {
    console.log('\nUnused Images on disk:');
    unusedImages.forEach(img => console.log(`- ${img}`));
}
