const levelup = require('level');
const db = levelup('./testdb');
db.put('Apple', 'red', (err) => {
    if (err) {
        console.log('Error', err);
        return;
    }
    testGet();
});
function testGet() {
    db.get('Apple', (err, value) => {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log('Apple=' + value);
        testBatch();
    });
}
// 일괄 저장 ※4
function testBatch() {
    db.batch()
        .put('Mango', 'yellow')
        .put('Banana', 'yellow')
        .put('Kiwi', 'green')
        .write( () => {
            testGet2();
        });
}
// Banana 값 읽기
function testGet2() {
    db.get('Banana', (err, value) => {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log('Banana=' + value);
    });
}