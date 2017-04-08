
//sqlite3 모듈을 로드하여
var sqlite3 = require('sqlite3').verbose();

//로컬 DB 를 연다.
var db = new sqlite3.Database('test.sqlite3');

//serialize() 메소드 내부에 테이블 작성이나 데이터 삽입, 추출 등의 조작을 기술한다.
db.serialize(function() {
    //sql을 실행하여 테이블 생성
    db.run('CREATE TABLE IF NOT EXISTS items(name, value)');

    //db.prepare 메소드를 사용하면 PreparedStatement를 사용할 수 있다.
    //sql을 미리 컴파일하고 부분적으로 데이터를 넣어 실행한다.
    //때문에 처리속도가 빠르고, 특수 기호를 자동으로 Escape 처리 해주므로 보안상 으로도 좋다.
    var pstmt = db.prepare('INSERT INTO items VALUES(?, ?)');
    pstmt.run(['Banana', 300]);
    pstmt.run(['Apple', 150]);
    pstmt.run(['Mango', 250]);
    pstmt.finalize();

    //데이터 조회
    //db.each() 메소드를 사용하여 sql 실행 결과로 얻은 DB의 데이터를 레코드별로 처리하고 있다.
    //콜백 함수의 인자로 각 레코드가 넘어온다.
    db.each('SELECT * FROM items', function (err, row) {
        console.log(row.name + ':' + row.value)
    });
});

db.close();
