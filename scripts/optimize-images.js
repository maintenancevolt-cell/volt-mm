const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');

const images = [
  { src: 'WhatsApp_Image_2026-03-27_at_2.12.56_PM_(2).jpeg', maxWidth: 1120, quality: 85 },
  { src: 'WhatsApp_Image_2026-03-27_at_2.12.57_PM_(1).jpeg', maxWidth: 1120, quality: 85 },
  { src: 'WhatsApp_Image_2026-03-27_at_2.12.57_PM.jpeg', maxWidth: 1120, quality: 85 },
  { src: 'WhatsApp_Image_2026-03-27_at_2.12.56_PM.jpeg', maxWidth: 1120, quality: 85 },
  { src: '1.png', maxWidth: 1120, quality: 85 },
  { src: '2.png', maxWidth: 1120, quality: 85 },
  { src: '3.png', maxWidth: 1120, quality: 85 },
  { src: 'logo_png-01.png', maxWidth: 400, quality: 90 },
];

function destName(src) {
  return src.replace(/\.(png|jpeg|jpg)$/i, '.webp');
}

async function processImage({ src, maxWidth, quality }) {
  const srcPath = path.join(PUBLIC, src);
  const destPath = path.join(PUBLIC, destName(src));

  if (!fs.existsSync(srcPath)) {
    console.error(`Missing source file: ${src}`);
    process.exit(1);
  }

  const srcSize = fs.statSync(srcPath).size;

  await sharp(srcPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality })
    .toFile(destPath);

  const destSize = fs.statSync(destPath).size;
  const srcKB = Math.round(srcSize / 1024);
  const destKB = Math.round(destSize / 1024);
  const reduction = Math.round((1 - destSize / srcSize) * 100);

  console.log(`${src}: ${srcKB} KB → ${destKB} KB (-${reduction}%)`);

  return { srcSize, destSize };
}

async function main() {
  const results = await Promise.all(images.map(processImage));

  const totalSrc = results.reduce((sum, r) => sum + r.srcSize, 0);
  const totalDest = results.reduce((sum, r) => sum + r.destSize, 0);
  const totalReduction = Math.round((1 - totalDest / totalSrc) * 100);

  console.log('');
  console.log(
    `Total: ${(totalSrc / 1024 / 1024).toFixed(2)} MB → ${(totalDest / 1024 / 1024).toFixed(2)} MB (-${totalReduction}%)`,
  );
}

main();
