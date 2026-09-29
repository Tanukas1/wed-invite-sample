const fs = require('fs');
const css = fs.readFileSync('ref-bundle.css', 'utf8');

// Find font-face
const fontFaces = css.match(/@font-face\s*\{[^}]+\}/gi) || [];
console.log('--- Font Faces ---');
fontFaces.forEach(f => console.log(f));

// Find :root variables
const rootVars = css.match(/:root\s*\{[^}]+\}/gi) || [];
console.log('\n--- Root Variables ---');
rootVars.forEach(r => console.log(r));

// Find custom font families, colors, or animations
const keyframes = css.match(/@keyframes\s+[a-zA-Z0-9_-]+\s*\{[^}]+\}/gi) || [];
console.log('\n--- Keyframes ---');
keyframes.forEach(k => console.log(k.slice(0, 100) + '...'));

// Search for colors or themes
console.log('\n--- Themes / classes sample ---');
const colorMatches = css.match(/--(?:rose|cream|gold|sage)[a-zA-Z0-9_-]*:[^;]+/gi) || [];
console.log('Color vars:', colorMatches);
