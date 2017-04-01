
const levelup = require('level');

const db = levelup('./testdb');

//값 저장
db.put('Apple', 'red', function(err) {
  if (err) {
    console.log('Error', err);
    return;
  }
  testGet();
});

// 값읽기
function testGet() {
  db.get('Apple', function(err, value) {
    if (err) {
      console.log('Error', err);
      return;
    }
    console.log('Apple=' + value);
    testBatch();
  });
}

//일괄 저장
function testBatch() {
  db.batch()
  .put('Mango', 'yellow')
  .put('Banana', 'yellow')
  .put('Kiwi', 'yellow')
  .write(function() {
    testGet2();
  });
}

//바나나값 읽기
function testGet2() {
  db.get('Banana', function(err, value) {
    if (err) {
      console.log('Error', err);
      return;
    }
    console.log('Banana=' + value);
  });
}
