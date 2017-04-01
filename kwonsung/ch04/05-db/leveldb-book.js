const client = require('cheerio-httpcli');
const fs = require('fs');
const levelup = require('level');
const db = levelup('./leveldb-JPUB');

const BASE_URL = `http://jpub.tistory.com/category/${encodeURIComponent('제이펍의 도서')}`;
const PAGE_NUM = 6;
const booklist = [];

const search = () => {
  const opt = {
    start: '프로그래밍',
    end: '프로그래밍\xFF'
  };

  db.createReadStream(opt)
  .on('data', data => console.log(`${data.key} >> ${data.value}\n`));
};

const dbInsert = () => {
  const books = {};
  booklist.forEach(v => {
    const words = v.split(' ');
    for(const word in words) {
      const titles = books[word];
      if(titles === undefined) books[word] = [];
      books[word].push(v);
    }
  });

  for(const key in books) {
    if(!key) continue;
    const titles = books[key];
    db.put(key, titles.join('\n'));
  }

  search();
};

const scrape = page => {
  if(page > PAGE_NUM) return dbInsert();

  const VISIT_URL = `${BASE_URL}?page=${page}`;

  client.fetch(VISIT_URL, (err, $, res) => {
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