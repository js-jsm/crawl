// 플리커 검색 결과를 캡쳐 for Casperjs
// Casperjs 객체 생성
var casper = require('casper').create();

//Casperjs 처리 개시 --> start()호출
casper.start();

// 화면 사이트 설정
// 화면 크기 설정
casper.viewport(1400, 800);

// UserAgent 설정
// 디바이스 시스템이 무엇인지 알 수있음
// 설정할 수 있는 범위가 있음
casper.UserAgent('UserAgent : Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebkit/537.36(KHTML, like Gecko) chrome/37.0.2062/120 Safari/537.36');

// 플리커 에서 고양이로 검색
// 고양이에 대한 검색 결과를 요청해 text에 저장.
//          한글과 같은 문자를 A code로 바꿔주는 것이 퍼센팅 인코딩 인데
//         이것을 실행 시켜 주는 것이 encodeURIComponent()이다
var text = encodeURIComponent('고양이');
                                    // 자기가 입력한 text가 입력이 된다.
casper.open('http://www.flickr.com/sear/ch/?text=' + text);

// 화면 캡처
casper.then(function() {
  //capture매개 변수에 캡처할 범위를 인자로 넘겼다.
  this.capture('flickr-cat.png', {
    top:0, left:0, width: 1400, height:800
  });
});

//실행 개시
casper.run();
