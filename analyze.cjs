const fs = require('fs');

const js = fs.readFileSync('ref-bundle.js', 'utf8');
const css = fs.readFileSync('ref-bundle.css', 'utf8');

console.log('JS length:', js.length);
console.log('CSS length:', css.length);

// Find all URLs (http/https/relative)
const urlMatches = js.match(/https?:\/\/[^\s"'`<>]+|\/[a-zA-Z0-9_\-\.\/]+\.(?:png|jpg|jpeg|webp|gif|svg|mp3|mp4|webm|woff2|woff|ttf|otf)/gi) || [];
const uniqueUrls = Array.from(new Set(urlMatches));

console.log('\n--- URLs found in JS: ---');
uniqueUrls.forEach(u => console.log(u));

// Look for image/asset imports or strings
const assetRegex = /["'`]([^"'`]+\.(?:png|jpe?g|webp|gif|svg|mp3|mp4|webm|otf|ttf|woff2?))["'`]/gi;
let match;
const assets = new Set();
while ((match = assetRegex.exec(js)) !== null) {
  assets.add(match[1]);
}
console.log('\n--- Assets found in JS quotes: ---');
assets.forEach(a => console.log(a));

// Look for component names / headings
console.log('\n--- Searching for key text / sections: ---');
const textSnippets = [
  'Saiyam', 'Jenny', 'Wedding', 'Invitation', 'Save the Date', 'Events', 'Schedule',
  'Haldi', 'Mehndi', 'Sangeet', 'Reception', 'RSVP', 'Venue', 'Story', 'Gallery',
  'Countdown', 'audio', 'music'
];
textSnippets.forEach(term => {
  const regex = new RegExp(`.{0,40}${term}.{0,40}`, 'gi');
  const matches = js.match(regex);
  console.log(`\nMatches for "${term}" (${matches ? matches.length : 0}):`);
  if (matches) {
    matches.slice(0, 5).forEach(m => console.log('  ...', m.replace(/[\n\r]/g, ' '), '...'));
  }
});
