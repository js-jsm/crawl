const fs = require('fs');
const json = fs.readFileSync('./test.json', 'utf-8');
const obj = JSON.parse(json);

const {items} = obj;
for(const item of items) {
  const name = item.name;
  const price = item.price;
  console.log(name, price);
}