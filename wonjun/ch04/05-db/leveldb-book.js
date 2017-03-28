
const DB_DIR = __dirname + '/leveldb-JPUB';

const levelup = require('level');

var db = levelup(DB_DIR);

const BASE_URL = 'http://jpub.tistory.com/category/' + encodeURIComponent('제이펍의 도서');

const PAGE_NUM = 6;

const client = require('cheerio-httpcli');
const fs = require('fs');
const urlType = require('url');

var booklist = [];

scrape(1);

function scrape(page) {
  if (page > PAGE_NUM) {
    dbinsert();
    return;
  }

  var VISIT_URL = BASE_URL + '?page=' + page;

  client.fetch(VISIT_URL, function (err, $, res) {
    if (err) { console.log('DL Error'); return; }

    var tr = $('#searchList > ol > li > span.list > a');

    if (!tr) {
      console.log('페이지 형식 에러'); return;
    }

    for (var i = 0; i < tr.length; i++) {
      var book = tr.eq(i).text();
      booklist.push(book);
    }
    scrape(page + 1);
  });
};


function dbinsert() {
  var books = {};

  booklist.forEach(function(value, index, array) {
    var words = value.split(' ');

    for (var i in words) {
      var word = words[i];
      var titles = books[word];
      if (titles == undefined || titles == '') {
        books[word] = [];
      }
      books[word].push(value);
    }
  });

  for (var key in books) {
    var titles = books[key];
    if (key !== '') {
     db.put(key, titles.join('\n'));
    }
  }
  search();
};

function search() {
  var opt = {
    start: '프로그래밍',
    end: '프로그래밍\uFFFF'
  };
  db.createReadStream(opt)
  .on('error', function(err) {
    console.log(err);
  }).on('data', function(data) {
    console.log(data.key + '>>' + data.value + '\n');
  });
};
