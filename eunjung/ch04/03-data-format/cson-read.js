const fs   = require('fs'),
      CSON = require('cson'),
      cson = fs.readFileSync('./test.cson', 'utf-8'),
      obj  = CSON.parse(cson);

for (const {name, price} of obj.items)
    console.log(name, price);