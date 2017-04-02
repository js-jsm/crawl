const
    yaml = require('js-yaml'),
    fs = require('fs');


let txt = fs.readFileSync('test.yml', 'utf-8'),
    obj = yaml.safeLoad(txt);

for (let i in obj.items) {
    let it = obj.items[i];
    console.log(it.name, it.price);
}
