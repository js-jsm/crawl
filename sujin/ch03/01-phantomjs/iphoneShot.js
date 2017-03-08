//아이폰 인 척하고 웹사이트 캡처 for Casperjs

var TARGET_URL = 'http://jpub.tistory.com';

//Casper 생성
var casper = require('casper');
casper.start();

// 아이폰 인 척하기
casper.UserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like OS X)
AppleWebkit/538.51.1 (KHTML. like Gecko) Version7.0 Mobile/11A465 Safari/9537.53');

// 화면사이즈 지정
casper.viewport(750, 1334);

casper.open(TARGET_URL);

//화면 캡처
casper.then(function(){
  this.capture('screenshot.png');
});
