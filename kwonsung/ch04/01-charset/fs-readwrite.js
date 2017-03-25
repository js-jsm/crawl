const fs = require('fs');
const txt = fs.readFileSync('./sample.txt', 'utf-8');
console.log(txt);
fs.writeFileSync('test.txt', txt);