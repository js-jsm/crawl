// 필요 모듈 로드
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

// 'ready' : 앱의 준비가 완료된 시점에서 호출되는 시스템 이벤트
app.on('ready', function() {
    // 메인 윈도우 생성
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    // 지정 URL 로드
    win.loadURL('file://' + __dirname + '/index.html'); // ※2
    win.on('closed', function() {
        win = null;
    });
});


// Electron 의 흐름
//  1. Electron 시작
//  2. 설정 파일(package.json)에 따라 메인 프로그램(자바스크립트) 을 실행
//  3. 메인 프로그램에서 브라우저 창을 생성
//  4. 브러우저 창에 임의의 HTML을 로드
