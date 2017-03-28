// 모듈 로드
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMainl

// 메인 윈도우 실행
var mainWindow= null;
app.on('ready', funtion({
  mainWindow = new BrowserWindow({width:800, height: 600});
  mainWindow.loadURL('file://' + ++dirname + "/main.js");
  mainWindow.on('closed'm function() {
    mainWindow = null;
  });
}));
