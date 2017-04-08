const levelup = require('level');
const opt = { valueEncoding:'json' };
const db = levelup('./testdb2', opt);
db.batch()
  .put('fruits!apple', {
    name: 'Apple',
    price: 300,
    color: 'red'})
  .put('fruits!orange', {
    name: 'Orange',
    price: 180,
    color: 'orange'})
  .put('fruits!banana', {
    name: 'Banana',
    price: 200,
    color: 'yellow'})
  .put('fruits!kiwi', {
    name: 'Kiwi',
    price: 220,
    color: 'green'})
  .put('snack!poteto', {
    name: 'Poteto-Snack',
    price: 340,
    color: 'brown'
  })
  .put('snack!choco', {
    name: 'Choco-Snack',
    price: 220,
    color: 'black'
  })
  .write(testKeys);

function testKeys() {
  console.log("keys:")
  db.createKeyStream()
    .on('data', (key) => {
      console.log(" - " + key);
    })
    .on('end', testKeyValues);
}

function testKeyValues() {
  console.log("\nkey-value-list:");
  db.createReadStream()
    .on('data', (data) => {
      const key = data.key;
      const o = data.value;
      console.log("+ key=" + data.key);
      console.log("| color=" + o.color);
      console.log("| price=" + o.price);
    })
    .on('end', testSearch);
}

function testSearch() {
  console.log('\nrange-search:');
  const opt = {
    start : "fruits!",
    end   : "fruits!\xFF"
  };
  db.createReadStream(opt)
    .on('data', (data) => {
      console.log("+ key=" + data.key);
    })
    .on('end', () => {
      console.log('ok')
    });
}
