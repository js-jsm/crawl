// 웹사이트의 사이틀을 표시하는 프로그램

// CasperJS 객체 생성
const casper = require('casper').create();
const TARGET_URL = 'http://jpub.tistory.com/';

// 웹사이트 열기
casper.start(TARGET_URL, function() {
  this.echo(casper.getTitle());
});

// 실제 프로그램 실행
casper.run();