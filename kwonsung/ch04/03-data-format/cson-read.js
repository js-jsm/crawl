const fs = require('fs');
const CSON = require('cson');
const cson = fs.readFileSync('./test.json', 'utf-8');
const obj = CSON.parse(cson);

const {items} = obj;
for(const item of items) console.log(item.name, item.price);

const cson_out = CSON.stringify(obj);
console.log(cson_out);