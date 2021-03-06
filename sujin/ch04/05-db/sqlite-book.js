//제이펍 출판 도서 목록을 DB에 넣고 조회하기 for Node.js

//경로 지정
//            __dirname 현재 폴더에서 하위 경로로 저장.
var DB_PATH = __dirname + '/jpub.sqlite';

//모듈 로드
//modules-node에서 require()을 사용해 'sqlite3'의 모듈을 가지고와 sqlite3 변수에 저장한다.
var sqlite3 = require('sqlite3').verbose(); // verbose --> 다른 함수를 인자로 받는다.

//데이터베이스 연결
var db = new sqlite3.Database(DB_PATH);

//변수 선언                                           //encodeURIComponent-> '제이펍의 도서' 라는 글자를 인코딩해라.
var BASE_URL = 'http://jpub.tistory.com/category/' + encodeURIComponent('제이펍의 도서');
var PAGE_NUM = 6; // PAGE 최대값

// 모듈 선언
//modules-node모듈에서 require을 사용해 'cheerio-httpcli', 'fs', 'url'을 가지고와 각 지정한 변수에 저장한다.
var client  = require('cheerio-httpcli');
var fs = require('fs');
var urlType = require('url');

//출판책 목록 저장 변수
var booklist = [];

scrape(1);

function scrape(page) {
  //
  if(page > PAGE_NUM) {
    dbinsert();
    return;
  }
  var VISIT_URL = BASE_URL + '?page=' + page;

  //사이트 방문
  client.fetch(VISIT_URL, function (err, $, res) {
    if (err) {
      console.log('DL error');
      return;
    }
    // 책 리스트 추출
    var tr = $('#serachList > ol > li > span.list > a');
    if (!tr) {
      console.log('페이지 형식 에러');
      return;
    }

    // 책 리스트 순회
    for(var i = 0; i < tr.length; i++) {
      var book = tr.eq(i).text();
      booklist.push(book);
    }
    scrape(page + 1);
  });
}

// 꺼낸 책 정보 db에 insert
function dbinsert() {
  //db 에 데이터 넣기
  db.serialize(function() {
    //SQL 실행 하여 TABLE 생성
    db.run('CREATE TABLE IF NOT EXISTS book(' +
          'id INTEGER PRIMARY KEY, ' +
          'token TEXT)');

      var ins_stmt = db.prepare(
      'INSERT INTO book (token)' +
      'VALUES(?)');

      booklist.forEach(function(value, index, array) {
        var words = value.split(' '); // 단어별 분할

        for(var i in words) {
          ins_stmt.run(words[i]); //분할되 단어를 db에 삽입
        }
      });
      ins_stmt.finalize(); //sql 보냄

      // 제목에 사용된 단어 통계
      console.log('집계 결과');
      db.each('SELECT token, COUNT(token) as cnt '
      + 'FROM book GROUP BY token having cnt > 3 '
      + 'ORDER BY cnt DESC',
        function (err, row) {
          console.log(row.cnt + '회 :' + row.token);
        }
    );
  });
};
