const levelup = require('level');
const opt = {valueEncoding: 'json'};
const db = levelup('./testdb2', opt);

const testSearch = () => {
  console.log('\nrange-search:');
  const opt = {
    start: 'fruits!',
    end: 'fruits!\xFF'
  };
  db.createReadStream(opt)
  .on('data', data => console.log(`+ key = ${data.key}`))
  .on('end', () => console.log('ok'));
};

const testKeyValues = () => {
  console.log(`\nkey-value-list`);
  db.createReadStream()
  .on('data', data => {
    const {key, value: o} = data;
    console.log(` + key = ${data.key}`);
    console.log(`| color = ${o.color}`);
    console.log(`| price = ${o.price}`);
  })
  .on('end', testSearch)
};

const testKeys = () => {
  console.log('keys:');
  db.createKeyStream()
  .on('data', key => console.log(` - ${key}`))
  .on('end', testKeyValues);
};

db.batch()
.put('fruits!apple', {
  name: 'Apple',
  price: 300,
  color: 'red'
})
.put('fruits!orange', {
  name: 'Orange',
  price: 400,
  color: 'orange'
})
.put('fruits!Kiwi', {
  name: 'Kiwi',
  price: 220,
  color: 'green'
})
.put('snack!poteto', {
  name: 'Poteto-Snack',
  price: 300,
  color: 'brown'
})
.put('snack!choco', {
  name: 'Chco-Snack',
  price: 200,
  color: 'black'
})
.write(testKeys);