// 아이폰인 척하고 웹사이트 캡처 for CasperJS

var TARGET_URL = 'http://jpub.tistory.com';

//Casper 생성
var casper = require('casper').create();
casper.start();

// 아이폰인 척하기
casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

// 화면 사이즈 지정
casper.viewport(750, 1334);

casper.open(TARGET_URL);

// 화면 캡처
casper.then(function() {
    this.capture('screenShot-iphone.png');
});
// 실행
casper.run();
