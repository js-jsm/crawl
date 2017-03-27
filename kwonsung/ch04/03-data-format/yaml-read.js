const fs = require('fs');
const YAML = require('js-yaml');
const yaml = fs.readFileSync('./test.yml', 'utf-8');
const obj = YAML.safeLoad(yaml);
for(const item of obj.items) console.log(item.name, item.price);
