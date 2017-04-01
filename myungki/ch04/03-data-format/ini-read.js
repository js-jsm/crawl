const
    fs = require('fs'),
    ini = require('ini');

let txt = fs.readFileSync('test.ini', 'utf-8'),
    obj = ini.parse(txt);

for (let name in obj) {
    let it = obj[name];
    console.log(name, it.price, it.color);
}
