const client = require('cheerio-httpcli');
const fs = require('fs');

const BASE_URL = `http://jpub.tistory.com/category/${encodeURIComponent('제이펍의 도서')}`;
const PAGE_NUM = 6;
const booklist = [];

const print = () => {
  for(const key in booklist) {
    console.log(booklist[key]);
  }
};

const scrape = page => {
  if(page > PAGE_NUM) return print();

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