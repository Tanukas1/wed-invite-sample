const fs = require('fs');
const js = fs.readFileSync('ref-bundle.js', 'utf8');

// Find images
['qS', 'ZS', 'JS', 'eE', 'tE'].forEach(v => {
  const reg = new RegExp(`(?:const|var|let)\\s+${v}\\s*=[^;,]+`, 'g');
  const m = js.match(reg);
  console.log(v, ':', m ? m[0] : 'not found');
});

// Find XS component in full
const xsIdx = js.indexOf('const XS=');
console.log('\n--- XS component ---');
console.log(js.slice(xsIdx, xsIdx + 3000));
