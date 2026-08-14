import fs from 'fs';
import path from 'path';

// Create a copy or symlink if needed, and write public/01.png
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 130" width="500" height="130">
  <defs>
    <style>
      .senati-blue { fill: #0A39E6; }
      .senati-text { font-family: system-ui, -apple-system, 'Outfit', 'Montserrat', 'Arial Black', sans-serif; font-weight: 900; font-size: 82px; letter-spacing: 2px; }
    </style>
  </defs>
  <!-- Official Hexagon Emblem -->
  <g class="senati-blue">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M 60,6 L 115,37 L 115,99 L 60,130 L 5,99 L 5,37 Z M 32,41 L 88,41 L 88,55 L 50,55 L 50,68 L 88,68 L 88,97 L 0,97 L 0,83 L 72,83 L 72,68 L 32,68 Z" />
    <text x="140" y="100" class="senati-text">SENATI</text>
  </g>
</svg>`;

fs.writeFileSync('public/01.svg', svgContent);
fs.writeFileSync('src/assets/images/01.svg', svgContent);
console.log('Saved 01.svg in public and src/assets/images');
