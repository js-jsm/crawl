//HTML을 pdf로 출력 for CasperJS

// 제이펍 페이지
var url = 'http://naver.com/';
var savepath = 'test.pdf';

//CasperJS 오브젝트 생성
//modules-node에서 require()을 사용해 'casper'의 모듈을 가지고와 casper 변수에 저장한다.
var casper = require('casper').create(); // create()생성 하기
casper.start();
//페이지 설정
//casper.page.paperSize() -> 페이지의 크기 설정이나 페이지의 방향과 용지의 마진 설정 가능
casper.page.paperSize = {
  width: '8.5in',
  height: '11in',
  orientation: 'portrait',
  margin: '1cm'
};
casper.open(url); // url연다
//then() -> url을 열고 난후 ''
casper.then(function () {
  casper.capture(savepath); // 'test.pdf' 여기에 캡쳐한 사진을 저장한다.
});
casper.run();
