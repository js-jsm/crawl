## phantomJS

커멘더 라인으로 사용할 수 있는 브라우저 **phantomjs는 node 모듈이 아니다!


##CasperJS

phantomJS를 쉽게 사용하기 위한 라이브러리

예시 기본 예제
```js
const casper = require('casper').create();  //로드
casper.start("http://jpub.tistory.com", function() {
  this.echo(casper.getTitle()); //타이틀 가지고 온후 화면 출력
});
casper.run(); //run 메서드를 실행 시켜야 CasperJS실행
```

### 메서드 정리
```js
require('casper').create(); //초기 로드 {verbose: true, logLevel: "debug"}를 주면 좀 더 자세히 디버그 가능
start() //casper브라우저가 시작 하는 메서드
open() //특정 페이지에 방문하는 메서드 param => '주소' open('http://jpub.tistory.com')
then() //위의 메서드가 실행되었다면 이어서 처리하기위해 실행하는 메서드 param => 익명함수.then(function() { });
run() //실행 시키는 메서드
viewport() //화면 사이즈 설정 ex) viewport(1400, 800)
userAgent() //userAgent설정
capture() //화면을 캡쳐한다. param => 크기 & 위치, 저장명 ex) capture('flickr-cat.png',{ top:0, left:0, width: 1400, height: 800 })
evaluate() //페이지네에서 임의의 자바스크립트 코드를 수행한다. ex) evaluate(function() { }, [함수에 넘기고 싶은 parm]);
fill() //form에 내용 채워서 sumit을 할때 사용 ex) this.fill('form#login_form', { email: 'email',  pass:  'pass'}, true);
exists() //존재를 확인
mouseEvent() //마우스 이벤트 바인딩 ex) casper.mouseEvent('click', path);
```

### cli에서 실행
```
casperjs [0, 1, 2, 3]
casper.cli.args  배열로 들어온다.
```

### 설정 값 패턴
```js
const casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22',
    pageSettings: {
      loadImages:  false,         // The WebPage instance used by Casper will
      loadPlugins: false         // use these settings
    }
});
```

### 시작 패턴
```js
casper.start().thenOpen("https://www.facebook.com/login", function() {
  console.log('facebook connect');
});
```