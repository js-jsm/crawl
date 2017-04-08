const
    fs = require('fs');

let json = fs.readFileSync('test.json', 'utf-8'),
    obj = JSON.parse(json);

let items = obj.items;
for (var i in items) {
    let item = items[i],
        name = item.name,
        price = item.price;
    console.log(name, price);
}
