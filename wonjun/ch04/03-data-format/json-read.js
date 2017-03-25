const fs = require('fs');

const json = fs.readFileSync('test.json', 'utf-8');

const obj = JSON.parse(json);

const items = obj.items;

for (const i in items) {
  const item = items[i];
  const name = item.name;
  const price = item.price;
  console.log(name, price);
}
