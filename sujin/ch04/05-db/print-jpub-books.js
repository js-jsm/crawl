// 제이펍 출판 도서 출력 for Node.js

// 변수 선언

var BASE_URL = 'http://jpub.tistory.com/category/' + encodeURIComponent('제이펍의 도서');
var PAGE_NUM = 6;

// 모듈 로드
//modules-node모듈에서 require을 사용해 'cheerio-httpcli', 'fs', 'url'을 가지고와 각 지정한 변수에 저장한다.
var client  = require('cheerio-httpcli');
var fs      = require('fs');
var urlType = require('url');

// 출판 팩 목록 저장 변수
var booklist = [];

scrape(1);

function scrape(page) {
  if (page > PAGE_NUM) {
    print();
    return;
  }


  var VISIT_URL = BASE_URL + '?page=' + page;
  // 사이트 방문
  // fetch() -> 매개변수안에 있는 것을 가져오는 함수....(get() 이랑 비슷함.)
  // VISIT_URL을 호출하여 가져온 값으로 다시 function(err, $, res) 을 다시 콜백한다.
  client.fetch(VISIT_URL, function(err, $, res) {
    if(err) {
      console.log('DL error');
      return;
    }
      // 책 리스트 추출
      var tr = $('#serachList > ol > li > span.list > a');
      if(!tr) {
        console.log('페이지 형식 에러');
        return;
      }
      //책 리스트 순회
      // tr.length 만큼 순회
      for(var i = 0; i < tr.length; i++) {
        // eq() -> 인덱스 값을 사용해 원하는 위치의 요소를 가져올 수 있따
        //(get()?? -> 이것도 마찬가지로 원하는 위치의 요스를 가져올수 있따)
        // 다른점? => 불러오는 방식이 다름 (eq()는 제이쿼리 객체로 반환. 그래서 제이쿼리의 다른 메소드의 사용 가능)
        //            하지만 get은 DOM 객체로서 반환하게 됨. 그렇게 때문에 반환된 객체에 제이쿼리 메소드를 쓰면 에러메세지 띄움
        // 제이쿼리 객체는 제이쿼리 메소드를 통해 선택요소를 조작할 수 있찌만
        // DOM 객체는 자바스크립트를 사용해 조작하여야함.
        var book = tr.eq(i).text(); // 책리스트 text로 변환하여 book.에 저장
        booklist.push(book);
      }
      scrape(page + 1);
  });
}
  function print() {
    for(var i in booklist) {
      console.log(booklist[i]);
    }
  }
