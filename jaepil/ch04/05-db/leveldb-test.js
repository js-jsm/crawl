let levelup = require('level'),
    db = levelup('./testdb');

db.put('Apple', 'red', err => {
    if( err ) {
        console.log('error : ' + err );
        return;
    }
    testGet();
});

function testGet() {
    db.get('Kiwi', (err, value) => {
        if( err ) {
            console.log('error : ' + err );
            return;
        }
        console.log('Kiwi=', value);
        testBatch();
    });
}

function testBatch() {
    db.batch()
        .put('Mange', 'yellow')
        .put('Banana', 'yellow')
        .put('Kiwi', 'green')
        .write(_=>{
            testGet2();
        });
}

function testGet2() {
    db.get('Banana', (err, value) => {
        if( err ) {
            console.log('error : ' + err );
            return;
        }
        console.log('Banana=', value);
    });
}