const fs = require('fs');

const txt = fs.readFileSync('sample-utf8.txt', 'utf-8'); 

fs.writeFileSync('test.txt', txt);
