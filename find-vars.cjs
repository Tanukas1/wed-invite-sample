const fs = require('fs');
const js = fs.readFileSync('ref-bundle.js', 'utf8');

// Let's search for variable definitions: qS, ZS, JS, eE, tE, XS, oE, nE
const vars = ['qS', 'ZS', 'JS', 'eE', 'tE', 'XS', 'oE', 'nE', 'D1', 'z1', 'F1'];
vars.forEach(v => {
  const reg = new RegExp(`(?:const|var|let)\\s+${v}\\s*=`, 'g');
  let match;
  while ((match = reg.exec(js)) !== null) {
    const start = Math.max(0, match.index - 50);
    const end = Math.min(js.length, match.index + 500);
    console.log(`\n=== Definition of ${v} ===`);
    console.log(js.slice(start, end));
  }
});
