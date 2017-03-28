// LEVELDB 사용 에제 for Node.js

//모듈 로드와 DB오픈
var levelup = require('level');
var db = levelup('./testdb');

// 값 저장
db.put('Apple', 'red', function(err) {
  if(err) {
    console.log('Error', err);
    return;
  }
  testGet();
});

//값 읽기
function testGet() {
  db.get('Apple', function(err, value) {
    if (err) {
      console.log('Error', err);
      return;
    }
    console.log('Apple = ' + value);
    testBatch();
  });
}

// 일괄저장
function testBatch() {
  db.batch()
    .put('Mango', 'yellow')
    .put('Banana', 'yellow')
    .put('Kiwi', 'green')
    .write(function() { // write() -> 값을 연속으로저장.
        testGet2();
    });
}

//Banana 값 읽기
function testGet2() {
  db.get('Banana', function(err, value) {
    if (err) {
      console.log('Error', err);
      return;
    }
    console.log('Banana = ' + value);
  });
}
