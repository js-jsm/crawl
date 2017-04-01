const DB_DIR = __dirname + "/leveldb-JPUB";
const levelup = require('level');
const db = levelup(DB_DIR);
const BASE_URL = "http://jpub.tistory.com/category/" + encodeURIComponent("제이펍의 도서");
const client = require('cheerio-httpcli');
const fs = require('fs');
const URL = require('url');
let PAGE_NUM = 6;
let booklist = [];

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
    for (let i = 0; i < tr.length; i++) {
      let book = tr.eq(i).text();
      booklist.push(book);
    }
    scrape(page+1);
  });
}

function dbinsert() {
    let books = {};
    console.log("dbinsert");
    booklist.forEach( (value, index, array) => {
      const words = value.split(" ");
      for (let i in words) {
        const word = words[i];
        const titles = books[word];
        if (titles == undefined) {
          books[word] = [];
        }
        books[word].push(value);
      }
    });
    console.log("put");
    for (let key in books) {
      let titles = books[key];
      db.put(key, titles.join("\n"));
    }
    search();
};

function search() {
    console.log("search");
    const opt={
      start:'프로그래밍',
      end:'프로그래밍\uFFFF'
    };
    db.createReadStream(opt)
      .on("data", (data) => {
          console.log(data.key + ">>" + data.value + "\n\n");
      });
}

scrape(1);