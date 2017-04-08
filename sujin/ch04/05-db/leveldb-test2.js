// levleDB 사용 예제  for Node.js

var levelup  = require('level');
// 데이터베이스 열기 --> Key-Value의 value를 항상 JSON으로 저장하겠다는 것을 의미(즉, 값으로 자바스크립트 객체를 저장하고, 읽고 쓰도록 한다는 것)
var opt = {
  valueEncoding:'json'
}; // Key-Value의 value를 항상 JSON으로 저장한다는 것을 의미
var db = levelup('./testdb2', opt);

// 일괄로 값 저장 (-> 실제로 자바스크립트객체 저장중..)
db.batch() // 다중 한번에 저장을 할때 사용(저장안하고 대기)
  .put('fruits!apple', {
    name  : 'Apple',
    price : 300,
    color : 'red' })
  .put('fruits!banana', {
    name  : 'Banana',
    price : 300,
    color : 'yellow' })
  .put('fruits!orange', {
    name  : 'Orange',
    price : 300,
    color : 'orange' })
  .put('fruits!kiwi', {
    name  : 'Kiwi',
    price : 300,
    color : 'green'
  })
  .write(testKeys); // batch() 사용 하겠다

  //키 목록 획득
  function testKeys() {
    console.log('key : ');
    db.createKeyStream() // createKeyStream()을 사용해 data이벤트 발생 시켜 콜백함수로 key를 매개변수를 받아 console.log로 찍는다.
      .on('data', function(key) {
        console.log(' - ' + key);
      })
        .on('end', testKeyValue);
  }

  //키 값 쌍을 획득
  function testKeyValue() {
    console.log('\nkey-value-list:');
    db.createReadStream() //--> createReadStream() : key와 value를 포함한 객체를 한꺼번에 취득할 수 있음.
      .on('data', function(data) {
        var key = data.key;
        var o = data.value;
        console.log('+ key = ' + data.key);
        console.log('| color = ' + o.color);
        console.log('| price + ' + o.price);
      })
      .on('end', testSearch);
  }

  //검색 수행
  function testSearch() {
    console.log('\nrange-search : ');
    var opt = {
      gte: 'fruits!', // start
      lte: 'fruits!kiwi' // end fruitsㅇ로 시작하는 단어 모두 검색
    };
    db.createReadStream(opt) //검색 옵션 
      .on('data', function (data) {
        console.log('+ key = ' + data.key);
      })
      .on('end', function() {
        console.log('ok')
      });
  }
