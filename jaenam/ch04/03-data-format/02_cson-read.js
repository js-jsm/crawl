const CSON = require('cson');
const fs = require('fs');
const cson = fs.readFileSync('./test.cson', 'utf-8');
const obj = CSON.parse(cson);

obj.items.forEach(({name, price}) => {
    console.log(name, price);
});

console.log(CSON.stringify(obj));
