var casper = require('casper').create({verbose: true, logLevel: 'debug'});

//URL 및 로그인 정보 변수
// 접속 URL과 로그인 정보를 변수로 지정함.
var url = 'http://blog.naver.com/tnwls147258';
var id = '';
var password = '';

casper.start();

casper.open(url);

//Form Submit
//fill메소드 사용하여 로그인 함
casper.then(function() {
  //fill이라는 메소드 :
  // '#authForm' :
  casper.fill('#authForm', {
    loginId : id,
    password:password
  }, true);
});

// 로그인 후 실행
casper.then(function() {
  var getComment = function() {
    // 페이지 내의 document객체 사용
    return document.querySelector('#blogInfo > ul > li:nth-child(3) > span.day').innerText;
  };
                                    //evaluate() 는 함수 실행
                                    // evaluate()는 브라우저에서 접근이 가능(접근 권한을 주는??)

  console.log('새 댓글 수 : ' + this.evaluate(getComment));
  // evaluate()메소드 -> 웹 페이지 내에서 임의의 자바스트립트 코드를 수행하기위해 사용
});

casper.then(function() {
  var getGuestBook = funtion() {
    return document.querySelector('#blogInfo > ul > li:nth-child(5) > span.day').innerText;
  };
  console.log('새 방명록 수 : ' + this.evaluate(getGuestBook));
});

casper.run();
