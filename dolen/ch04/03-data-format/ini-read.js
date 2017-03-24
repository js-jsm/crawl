const fs  = require('fs'),
      ini = require('ini'),
      txt = fs.readFileSync('test.ini', 'utf-8'),
      obj = ini.parse(txt);

for (const i in obj)
    console.log(obj[i]);