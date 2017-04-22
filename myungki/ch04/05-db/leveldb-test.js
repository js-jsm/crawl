const
    levelup = require('level'),
    db = levelup('./testdb');

const testGet = _ => {
    db.get('Apple', (err, value) => {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log('Apple=' + value);
        testBatch();
    });
}

const testBatch = _ => {
    db.batch()
        .put('Mango', 'yellow')
        .put('Banana', 'yellow')
        .put('Kiwi', 'green')
        .write(_ => {
            testGet2();
        });
}

const testGet2 = _ => {
    db.get('Banana', function(err, value) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log('Banana=' + value);
    });
}

db.put('Apple', 'red', (err) => {
    if (err) {
        console.log('Error', err);
        return;
    }
    testGet();
});
