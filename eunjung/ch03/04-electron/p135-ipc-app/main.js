// 모듈 로드
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;

// 메인 윈도우 기동
var mainWindow = null;
app.on('ready', function(){
  mainWindow = new BrowserWindow({width:800, height:600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});

// 동기적 메시지 수신
ipc.on('mul-sync', function(event, arg) {
  console.log(arg); // 콘솔 출력
  event.returnValue = arg.a * arg.b;
});

// 비동기적 메시지 수신
ipc.on('mul-async', function(event, arg) {
  console.log(arg);// 콘솔 출력

  // 렌더링 프로세스에 반환
  var result = arg.a * arg.b;
  event.sender.send('mul-async-reply', result);
});

// 앱이 시작되면 두가지 자바 스크립트가 실행된다.
//  1) package.json 에 적힌 메인 프로그램 : 메인 프로세스
//  2) HTML 에서 실행 : 렌더링 프로세스
// 웹 브라우저에서 실행되는 HTML 은 파일 등의 로컬 리소스에 접근할 수 없다. (이는 Electron도 마찬가지)
// HTML 을 실행하는 렌더링 프로세스에서는 위험한 조작을 할 수 없는 반면 메인 프로세스에서는 Node.js 의 API를 자유롭게 사용할 수 있다.
// 렌더링 프로세스가 메인 프로세스에게 필요한 처리를 의뢰함으로써 웹브라우저에서 불가능했었던 처리가 가능하게 되는데
// 프로세스간의 통신을 위한 IPC모듈에 제공되고 있다.
