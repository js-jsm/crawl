//제이펍 출판 도서 출력 for Node.js

    //변수 선언
var BASE_URL = 'http://jpub.tistory.com/category/' + encodeURIComponent('제이펍의 도서'),
    PAGE_NUM = 6, //page의 최대값
    //모듈로드
    client  = require('cheerio-httpcli'),
    fs      = require('fs'),
    urlType = require('url'),
    //출판 책 리스트 저장 변수
    booklist = [];

scrape(1);
//총 6페이지로 구성되어있다.
function scrape(page) {
  if(page > PAGE_NUM) {
      print();
      return;
  }

  var VISIT_URL = BASE_URL + '?page=' + page;
  //사이트 방문
  client.fetch(VISIT_URL, function(err, $, res){
    if(err) {
      console.log('DL error');
      return;
    }
    //책 리스트 추출
    var tr = $('#searchList > ol > li > span.list > a');

    if(!fs) {
      console.log('페이지 형식 에러');
      return;
    }

    //책 리스트 순회
    for(var i = 0; i < tr.length; i++) {
      var book = tr.eq(i).text();
      booklist.push(book);
    }
    //재귀함수
    scrape(page + 1);
  });
}

//출력
function print() {
  for(var i in booklist) {
    console.log(booklist[i]);
  }
}
