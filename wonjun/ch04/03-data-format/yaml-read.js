const yaml = require('js-yaml');
const fs = require('fs');

const txt = fs.readFileSync('test.yml', 'utf-8');

const obj = yaml.safeLoad(txt);

for (const i in obj.items) {
  const it = obj.items[i];
  console.log(it.name, it.price);
}
