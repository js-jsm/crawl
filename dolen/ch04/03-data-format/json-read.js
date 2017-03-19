const fs   = require('fs'),
      json = fs.readFileSync('./test.json', 'utf-8'),
      obj  = JSON.parse(json);

for(const {name, price} of obj.items)
    console.log(name, price);