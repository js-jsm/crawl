const DB_PATH = __dirname + "/jpub.sqlite";
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(DB_PATH);
const BASE_URL = "http://jpub.tistory.com/category/" + encodeURIComponent("제이펍의 도서");
const PAGE_NUM = 6;

const client = require('cheerio-httpcli');
const fs = require('fs');
const URL = require('url');

const booklist = [];

function scrape(page) {
  if (page > PAGE_NUM) {
    dbinsert();
    return;
  }
  const VISIT_URL = BASE_URL + "?page=" + page;
  client.fetch(VISIT_URL, (err, $, res) => {
    if (err) { console.log("DL error"); return; }
    const tr = $("#searchList > ol > li > span.list > a");
    if (!tr) {
      console.log("페이지 형식 에러"); return;
    }
    for (var i = 0; i < tr.length; i++) {
      const book = tr.eq(i).text();
      booklist.push(book);
    }
    scrape(page+1);
  });
}

function dbinsert() {
  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS book(" +
      "id INTEGER PRIMARY KEY, " +
      "token TEXT)");

    const ins_stmt = db.prepare(
      'INSERT INTO book (token)' +
      'VALUES(?)');

    booklist.forEach(function(value, index, array) {
      const words = value.split(" ");
      for (let i in words) {
        ins_stmt.run(words[i]);
      }
    });
    ins_stmt.finalize();
    console.log("집계 결과");
    db.each("SELECT token, COUNT(token) as cnt "
      + "FROM book GROUP BY token having cnt > 3 "
      + "ORDER BY cnt DESC",
      (err, row) => {
        console.log(row.cnt + "회:" + row.token);
      }
    );
  });
};
scrape(1);