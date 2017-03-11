// Casperjs 화면 캡쳐 프로그램

// Casperjs 객체 생성
var casper = require('casper').create();

// 개시
casper.start();


// 페이지 열기
casper.open('http://naver.com');

// 스크린샷 수행
casper.then(function() {
  casper.capture('screenshot2.png');
});

// 실행
casper.run();
