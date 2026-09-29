const fs = require('fs');

const js = fs.readFileSync('ref-bundle.js', 'utf8');

// Find where application code starts (usually near the end, after react/lucide/framer-motion or similar)
// Let's search for "Wedding Hero" or "Club Babylon"
const heroIdx = js.indexOf('Wedding Hero');
console.log('Index of "Wedding Hero":', heroIdx);

// Let's print from 5000 characters before heroIdx to the end of the file
const startIdx = Math.max(0, heroIdx - 5000);
const appCode = js.slice(startIdx);

fs.writeFileSync('app-extracted.js', appCode);
console.log('Wrote app-extracted.js with length:', appCode.length);
