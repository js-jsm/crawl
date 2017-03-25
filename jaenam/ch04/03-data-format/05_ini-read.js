const fs = require('fs');
const ini = require('ini');
const txt = fs.readFileSync('test.ini', 'utf-8');
const obj = ini.parse(txt);

Object.entries(obj).forEach(([name, {price, color}]) => {
    console.log(name, price, color);
});
