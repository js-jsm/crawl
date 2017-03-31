//HTML 을 PDF로 출력 CasperJS

//제이펍 페이지
var url = 'http://jpub.tistory.com/';
var savepath = 'test.pdf';

//CasperJS 오브젝트 생성
var casper = require('casper').create();
casper.start();

//페이지 설정
casper.page.paperSize = {
  width : '8.5in',
  height : '1lin',
  orientation : 'portrait',
  margin : '1cm'
};
casper.open(url);
casper.then(function() {
  casper.capture(savepath);
});

casper.run();
