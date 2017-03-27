
const fs  = require('fs');

const ini = require('ini');

const txt = fs.readFileSync('test.ini', 'utf-8');

const obj = ini.parse(txt);

for (const name in obj) {
  const it = obj[name];
  console.log(name, it.price, it.color);
}
