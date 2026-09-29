const fs = require('fs');
const js = fs.readFileSync('ref-bundle.js', 'utf8');

const oeIdx = js.indexOf('oE=()=>');
console.log('--- oE component ---');
console.log(js.slice(oeIdx, oeIdx + 1500));
