// CasperJS 화면 캡처 프로그램

// Casper 객체 생성
const casper = require('casper').create();

// 프로그램 시작
casper.start();

// 페이지 열기
casper.open('http://jpub.tistory.com/');

// 스크린샷 캡처
casper.then(function() {
  casper.capture('screenshot.png');
});

/*
casper.start('http://jpub.tistory.com/', function() {
  casper.capture('screenshot.png');
});
*/

// 요 놈이 있어야 실제로 시작이 됨.
casper.run();