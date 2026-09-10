const fs = require('fs');
const jpeg = require('jpeg-js');

const jpegData = fs.readFileSync('public/images/frames/poppy-frame.jpg');
const rawImageData = jpeg.decode(jpegData, {useTArray: true});

const width = rawImageData.width;
const height = rawImageData.height;
const data = rawImageData.data;

let minX = width, minY = height, maxX = 0, maxY = 0;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx+1];
    const b = data[idx+2];
    
    // Check if pixel is pure black or very close
    if (r < 10 && g < 10 && b < 10) {
      // Ignore some potential noise on the very edges of the image
      if (x > width * 0.05 && x < width * 0.95 && y > height * 0.05 && y < height * 0.95) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
}

console.log(`Image Size: ${width}x${height}`);
console.log(`Black box: x=${minX} to ${maxX}, y=${minY} to ${maxY}`);
console.log(`Top border: ${(minY / height * 100).toFixed(2)}%`);
console.log(`Bottom border: ${((height - maxY) / height * 100).toFixed(2)}%`);
console.log(`Left border: ${(minX / width * 100).toFixed(2)}%`);
console.log(`Right border: ${((width - maxX) / width * 100).toFixed(2)}%`);
