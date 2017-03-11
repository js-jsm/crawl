// 웹사이트의 타이틀을 표시하는 프로그램
var TARGET_URL = "http://jpub.tistory.com";

// CarperJS 객체 생성
var casper = require('casper').create();

// 웹사이트 열기
// 방문할 웹페이지는 start() 인자로 지정하고 있음.
// 단지 start()는 방문할 url을 지정하고 페이지가 로드 되었을 때 수행 되어야할 콜백 함수를 지정할 뿐.
casper.start(TARGET_URL, function() {
  //타이틀 출력
  this.echo(casper.getTitle());
});

// 처리 수행
casper.run();
