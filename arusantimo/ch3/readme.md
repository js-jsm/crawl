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
  console.log('facebook connect \n\n\n\n\n ');
});
```


## Electron
Electron은 자바스크립트와 함께 제공된 풍부한 네이티브 API를 사용하여 데스크탑 애플리케이션을 만들 수 있도록 해주는 프레임워크

### 메인 프로세스
Electron은 실행될때 메인 포르세스 (packagejson에 정의) 를 호출한다. Electron프로세스가 실행된다.

### 렌더러 프로세스
Electron프로레스 내에 작동하는 웹페이지를 렌더러 프로세스라고 한다.

### 두 프로세스의 연결
ipcRenderer와 ipcMain로 프로세스간의 통신을 할 수 있다.

### 기본 예제

#### 폴더 구조
```
your-app/
├── package.json
├── main.js
└── index.html
```

#### package.json
```js
{
  "name"    : "your-app",
  "version" : "0.1.0",
  "main"    : "main.js" //정의 되어 있지 않으면 자동으로 index.js를 로드한다.
}
```
#### main.js
```js
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
let win = null;
function createWindow() {
  // 새로운 브라우저 창을 생성합니다.
  win = new BrowserWindow({width: 800, height: 600})

  // 그리고 현재 디렉터리의 index.html을 로드합니다.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // 개발자 도구를 엽니다.
  win.webContents.openDevTools()

  // 창이 닫히면 호출됩니다.
  win.on('closed', () => {
    // 윈도우 객체의 참조를 삭제합니다. 보통 멀티 윈도우 지원을 위해
    // 윈도우 객체를 배열에 저장하는 경우가 있는데 이 경우
    // 해당하는 모든 윈도우 객체의 참조를 삭제해 주어야 합니다.
    win = null
  })
}

// 이 메서드는 Electron의 초기화가 끝나면 실행되며 브라우저
// 윈도우를 생성할 수 있습니다. 몇몇 API는 이 이벤트 이후에만
// 사용할 수 있습니다.
app.on('ready', createWindow)

// 모든 창이 닫히면 애플리케이션 종료.
app.on('window-all-closed', () => {
  // macOS의 대부분의 애플리케이션은 유저가 Cmd + Q 커맨드로 확실하게
  // 종료하기 전까지 메뉴바에 남아 계속 실행됩니다.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // macOS에선 보통 독 아이콘이 클릭되고 나서도
  // 열린 윈도우가 없으면, 새로운 윈도우를 다시 만듭니다.
  if (win === null) {
    createWindow()
  }
})

// 이 파일엔 제작할 애플리케이션에 특화된 메인 프로세스 코드를
// 포함할 수 있습니다. 또한 파일을 분리하여 require하는 방법으로
// 코드를 작성할 수도 있습니다.
```

### ipc모듈
```js

```