const levelup = require('level');
const db = levelup('./testdb');

const testGet2 = () => {
  db.get('Banana', (err, v) => {
    if(err) return console.log(`Error: ${err}`);
    console.log(`Banana=${v}`);
  });
};

const testBatch = () => {
  db.batch().put('Mango', 'yellow')
  .put('Banana', 'yellow')
  .put('Kiwi', 'green')
  .write(() => testGet2());
};

const testGet = () => {
  db.get('Apple', (err, v) => {
    if(err) return console.log(`Error: ${err}`);
    console.log(`Apple=${v}`);
    testBatch();
  });
};

db.put('Apple', 'red', err => {
  if(err) return console.log(`Error: ${err}`);
  testGet();
});