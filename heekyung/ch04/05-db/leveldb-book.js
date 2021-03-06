// 제이펍 출판 서적 데이터 LevelDB에 저장 for Node.js

// 경로 지정
var DB_DIR = __dirname + '/leveldb-JPUB';

var levelup = require('level');

// 데이터베이스 연결
var db = levelup(DB_DIR);

// 변수 선언
var BASE_URL = "http://jpub.tistory.com/category/" + encodeURIComponent("제이펍의 도서");
var PAGE_NUM = 6; //page 최대값

// 모듈 로드
var client = require('cheerio-httpcli');
var fs = require('fs');
var urlType = require('url');

// 출판 책 목록 저장 변수
var bookList = [];

scrape(1);

function scrape(page) {
    if(page > PAGE_NUM) {
        dbinsert();
        return;
    }
    
    var VISIT_URL = BASE_URL + '?page=' + page;
    
    // 사이트 방문
    client.fetch(VISIT_URL, function(err, $, res) {
        if(err) { console.log('DL error'); return; }
        // 책 리스트 추출
        var tr = $('#searchList > ol > li > span.list > a');
        if(!tr) {
            console.log('페이지 형식 에러'); return;
        }
        // 책 리스트 순회
        for(var i = 0; i < tr.length; i ++) {
            var book = tr.eq(i).text();
            bookList.push(book);
        }
        scrape(page+1);
    });
}

function dbinsert() {
    var books = {};
    bookList.forEach(function(value, index, array) {
        var words = value.split(' ');
        
        for(var word in words) {
            var title = books[word];
            if(title == undefined) {
                books[word] = [];
            }
            books[word].push(value);
        }
    });
    for(var key in books) {
        var titles = books[key];
        db.put(key, titles.join('\n'));
    }
    search();
};

function search() {
    var opt = {
        start: '프로그래밍',
        end: '프로그래밍\uFFFF'
    };
    
    db.createReadStream(opt)
        .on('data', function(data) {
            console.log(data.key + ' >> ' + data.value + '\n');
        });
}
