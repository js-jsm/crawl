// 아이폰인 척 하고 웹 사이트 캡처 for CasperJS

// CasperJS 객체 생성
const casper = require('casper').create();
const TARGET_URL = 'http://jpub.tistory.com/';

casper.start();

// 아이폰 코스프레
casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

// 화면 사이즈 지정
casper.viewport(750, 1334);

// 페이지 오픈
casper.open(TARGET_URL);

// 화면 캡처
casper.then(function() {
  this.capture('iphone.jpg');
});

casper.run();