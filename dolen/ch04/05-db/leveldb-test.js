const db = require('level')('./testDB');

const testBatch = () =>
    db.batch()
      .put('Mango', 'yellow')
      .put('Banana', 'yellow')
      .put('Kiwi', 'green')
      .write(testGet2);

const testGet2 = () => db.get('Banana', (err, value) => {
    if(err)
        return;

    console.log('Banana=' + value);
});

const testGet = () => db.get('Apple', (err, value) => {
    if(err)
        return;

    console.log('Apple=' + value);

    testBatch();
});


db.put('Apple', 'red', err => {
    if(err)
        return;

    testGet();
});