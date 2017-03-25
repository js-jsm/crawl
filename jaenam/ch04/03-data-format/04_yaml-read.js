const yaml = require('js-yaml');
const fs = require('fs');
const txt = fs.readFileSync('test.yml', 'utf-8');
const obj = yaml.safeLoad(txt);

obj.items.forEach(({name, price}) => {
    console.log(name, price);
});
