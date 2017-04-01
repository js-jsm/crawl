const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('jpub.sqlite');
const client = require('cheerio-httpcli');
const fs = require('fs');

const BASE_URL = `http://jpub.tistory.com/category/${encodeURIComponent('제이펍의 도서')}`;
const PAGE_NUM = 6;
const booklist = [];

const dbInsert = booklist => {
  db.serialize(() => {
    db.run(
`CREATE TABLE IF NOT EXISTS book(
  id INTEGER PRIMARY KEY,
  token TEXT
)`
    );
    const stmt = db.prepare('INSERT INTO book (token) VALUES(?)');

    booklist.forEach(v => {
      const words = v.split(' ');
      for(const word of words) stmt.run(word);
    });

    stmt.finalize();

    console.log('집계 결과');
    db.each(
`SELECT token, COUNT(token) as cnt FROM book
GROUP BY token having cnt > 3
ORDER BY cnt DESC`, (err, row) => {
      console.log(`${row.cnt}회: ${row.token}`);
    });
  });
  db.close();
};

const scrape = page => {
  if(page > PAGE_NUM) return dbInsert(booklist);

  const VISIT_URL = `${BASE_URL}?page=${page}`;

  client.fetch(VISIT_URL, (err, $) => {
    if(err) return console.log('DL error');

    const tr = $('#searchList > ol > li > span.list > a');
    if(!tr) return console.log('페이지 형식 에러');

    for(let i=0; i<tr.length; i++) {
      const book = tr.eq(i).text();
      booklist.push(book);
    }
    scrape(page+1);
  });
};

scrape(1);