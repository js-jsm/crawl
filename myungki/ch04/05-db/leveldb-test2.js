const levelup = require('level'),
    opt = {
        valueEncoding: 'json'
    },
    db = levelup('./testdb2', opt);


const testKeys = () => {
    console.log("keys:")
    db.createKeyStream().on('data', key => {
        console.log(` - ${key}`);
    }).on('end', testKeyValues);
}

const testKeyValues = _ => {
    console.log("\nkey-value-list:");
    db.createReadStream().on('data', data => {
        let key = data.key,
            o = data.value;
        console.log("+ key=" + data.key);
        console.log("| color=" + o.color);
        console.log("| price=" + o.price);
    }).on('end', testSearch);
}

const testSearch = _ => {
    console.log('\nrange-search:');
    let opt = {
        start: "fruits!",
        end: "fruits!\xFF"
    };
    db.createReadStream(opt).on('data', data => {
        console.log(`+ key=${data.key}`);
    }).on('end', _ = {
        console.log('ok')
    });
}

db.batch()
.put('fruits!apple', {
    name: 'Apple',
    price: 300,
    color: 'red'
}).put('fruits!orange', {
    name: 'Orange',
    price: 180,
    color: 'orange'
}).put('fruits!banana', {
    name: 'Banana',
    price: 200,
    color: 'yellow'
}).put('fruits!kiwi', {
    name: 'Kiwi',
    price: 220,
    color: 'green'
}).put('snack!poteto', {
    name: 'Poteto-Snack',
    price: 340,
    color: 'brown'
}).put('snack!choco', {
    name: 'Choco-Snack',
    price: 220,
    color: 'black'
}).write(testKeys);
