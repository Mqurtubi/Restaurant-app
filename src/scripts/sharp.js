const sharp = require('sharp');

const inputImagePath = './src/public/images/heros/hero-image_1.jpg';
const mobileImagePath = './src/public/images/heros/hero-image_1_mobile.jpg';
const desktopImagePath = './src/public/images/heros/hero-image_1_desktop.jpg';

sharp(inputImagePath)
  .resize(450)
  .toFile(mobileImagePath, (err, info) => {
    if (err) {
      console.error('Error resizing image for mobile:', err);
    } else {
      console.log('Mobile image resized successfully:', info);
    }
  });

sharp(inputImagePath)
  .resize(1280)
  .toFile(desktopImagePath, (err, info) => {
    if (err) {
      console.error('Error resizing image for desktop:', err);
    } else {
      console.log('Desktop image resized successfully:', info);
    }
  });
