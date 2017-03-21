// 웹사이트의 타이틀을 표시하는 프로그램
const TARGET_URL = "http://jpub.tistory.com";

// Casper JS 객체생성
const casper = require('casper').create();

// 웹사이트 열기
casper.start(TARGET_URL, function(){
    this.echo(casper.getTitle());
});

// 처리수행
casper.run();
