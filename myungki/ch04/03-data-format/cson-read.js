const
    cson = require('cson'),
    fs = require('fs');

let csonData = fs.readFileSync('test.cson', 'utf-8'),
    obj = cson.parse(csonData);

for (let i in obj.items){
    let it = obj.items[i];
    console.log(it.name, it.price);
}

let cson_out = cson.stringify(obj);
console.log(cson_out);
