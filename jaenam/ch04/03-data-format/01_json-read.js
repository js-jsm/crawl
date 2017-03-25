const fs = require('fs');
const json = fs.readFileSync('./test.json', 'utf-8');
const { items } = JSON.parse(json);

items.forEach(({name, price}) => {
    console.log(name, price);
});
