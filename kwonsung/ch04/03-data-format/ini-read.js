const fs = require('fs');
const INI = require('ini');
const ini = fs.readFileSync('./test.ini', 'utf-8');
const obj = INI.parse(ini);
for(const name in obj) {
  const item = obj[name];
  console.log(name, item.price, item.color);
}