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
  // 지정 로드 URL
  win.loadURL('file://' + __dirname + '/index.html'); //
  win.on('closed', function() {
    win = null;
  });
});
