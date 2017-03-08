// PhantomJS : 커맨드라인에서 쓸 수 있는 브라우저. 커맨드라인으로 브러우저를 조작하고 브라우저 안의 데이터를 취득하거나 스크린샷을 찍을 수 있다.
// CasperJS : PhantomJS를 쉽게 사용하기 위한 라이브러리.

// <웹사이트의 타이틀을 표시하는 프로그램>

var TARGET_URL = 'htttp://jpub.tistory.com';
var casper = require('casper').create();    // Casperjs 객체 생성

// 웹사이트 열기
casper.start(   // casper.run() 을 호출하면 casper.start() 가 수행된다. start()에는 방문흘 URL 과 방문 후 수행할 함수를 지정한다.
    TARGET_URL,
    function() {
        // 타이틀 출력
        this.echo(casper.getTitle());
    }
);

// 처리 수행
casper.run();
