const fs  = require('fs'),
      txt = fs.readFileSync('./sample-utf8.txt', 'utf-8'),
      txt2 = fs.readFileSync('./sample-utf8.txt');

console.log(txt);

console.log(txt2);

fs.writeFileSync(`./test.txt`, txt);