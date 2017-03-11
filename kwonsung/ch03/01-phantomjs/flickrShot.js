// 플리커 검색 결과를 캡처 for CasperJS

// CasperJS 객체 생성
const casper = require('casper').create();
casper.start();

// 사이트 화면 설정
casper.viewport(700, 800);

// UserAgent 설정
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36');

// 플리커에서 고양이로 검색
const text = encodeURIComponent('고양이');
casper.open('https://www.flickr.com/search/?text=' + text);

// 화면 캡처
casper.then(function() {
  // 콜백 함수(function() {}) 안에서 this === casper
  console.log(casper === this);
  this.capture('flickr-cat.png', {
    top: 0,
    left: 0,
    width: 1400,
    height: 800
  });
});

casper.run();