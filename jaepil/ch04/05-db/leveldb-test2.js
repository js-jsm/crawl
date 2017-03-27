let levelup = require('level'),
    opt = {valueEncoding:'json'},
    db = levelup('./testdb2', opt);

db.batch()
    .put('fruits!apply', {
        name: 'Apple',
        price: 300,
        color:' red'})
    .put('fruits!orange', {
        name: 'Orange',
        price: 180,
        color:' orange'})
    .put('fruits!banana', {
        name: 'Banana',
        price: 220,
        color:' yellow'})
    .put('snack!poteto', {
        name: 'Poteto-Snack',
        price: 340,
        color:'brown'})
    .write(testKeys);

function testKeys() {
    console.log('keys:');
    db.createKeyStream()
        .on('data', key=>{
            console.log(' - ' + key);
        }).on('end', testKeyValues);
}

function testKeyValues(){
    console.log('\nkey-value-list:');
    db.createReadStream()
        .on('data', data=>{
            let key = data.key,
                o = data.value;
            console.log('+ key=' + key);
            console.log('| color=' + o.color);
            console.log('| price=' + o.price);
        }).on('end', testSearch);
}

function testSearch() {
    console.log('\nrange-search');
    db.createReadStream({
        start:'fruits!',
        end:'fruits!\xFF'
    }).on('data', data=>{
        console.log('+ key=', data.key);
    }).on('end', _=>{
        console.log('ok');
    })
}