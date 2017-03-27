//모듈 로드
var sqlite3 = require('sqlite3').verbose();
//로걸 db열기
var db = new sqlite3.Database('test.sqlite');

//serialize() -> 내부의 테이블 작성이나 테이터 삽입, 추출 등의 조작 등을 기술함.
db.serialize(function() {
  //SQL을 실행하여 테이블 생성
  // db.run() -> sql 실행
  db.run('CREATE TABLE IF NOT EXISTS items(name, value)');

  // PreparedStatement로 데이터 삽입
  // db.prepare() -> PreparedStatement를 사용가능(-> sql을 미리 컴파일 하고 부분적으로 데이터를 넣어 실행ㅎ=)
  var stmt = db.prepare('INSERT INTO items VALUES(?,?)');
  stmt.run(['Banana', 300]);
  stmt.run(['Apple', 150]);
  stmt.run(['Mango', 350]);
  stmt.finalize();

  //데이터 조회
  db.each('SELECT * FROM items', function(err, row) {
    console.log(row.name + ':' + row.value);
  });
});
db.close();
