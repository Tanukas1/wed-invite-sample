const fs = require('fs');
const css = fs.readFileSync('ref-bundle.css', 'utf8');

const imports = css.match(/@import[^;]+;/gi) || [];
console.log('Imports:', imports);

// Check font family declarations
const fontFamilies = css.match(/font-family:[^;]+/gi) || [];
const uniqueFonts = Array.from(new Set(fontFamilies));
console.log('\nFont families:', uniqueFonts);
