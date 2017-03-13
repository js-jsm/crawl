const {
	electron,
	app,
	BrowserWindow
}	= require('electron');
const fs = require('fs');

// 메인 윈도우 기동
let win = null;
app.on('ready', function(){
	win = new BrowserWindow({width:1024, height:800});
	win.loadURL("https://atom.io");
	// 페이지 로드가 완료되면 캡쳐 수행
	win.webContents.on('did-finish-load',captureFunc);
});

// 캡쳐 처리
function captureFunc() {
	win.capturePage(function(img) {
		fs.writeFileSync('screenshot.png', img.toPng());
	});
}
