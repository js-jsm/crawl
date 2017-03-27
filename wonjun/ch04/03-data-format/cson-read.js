const CSON = require('cson');

const fs = require('fs');

const cson = fs.readFileSync('test.cson', 'utf-8');

const obj = CSON.parse(cson);

for (const i in obj.items) {
  const it = obj.items[i];
  console.log(it.name, it.price);
}

const cson_out = CSON.stringify(obj);

console.log(cson_out);
