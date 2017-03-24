// <Electron>
//  - 웹 기술을 이용하여 네이티브 애플리케이션을 쉽게 만들 수 있다.
//  - Node.js API나 모듈을 그대로 사용할 수 있다.
//  - 모든 내용이 자바스크립트로 렌더링되는 웹 페이지인 경우 단순히 HTML을 다운로드하면 내용이 텅 비어있는 경우가 있다.
//    이런 경우 Electron을 사용하면 자바스크립트에 의한 렌더링을 한 후 콘텐츠를 추출할 수 있다.

//  설치 : npm install electron-prebuilt -g
// 메인 프로그램과 앱 설정파일 두 파일이 필요하다./


// 위키피디아 페이지를 방문하는 Electron 예제
var TARGET_URL = "https://ko.wikipedia.org/";
// 필요 모듈 로드
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

// 준비가 된 시점에 호출되는 이벤트
app.on('ready', function() {
    // 메인 윈도우 생성
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    // 지정 URL 로드
    win.loadURL(TARGET_URL);
});
