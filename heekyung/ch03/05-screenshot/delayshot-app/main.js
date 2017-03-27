// 촬영 전 대기 시간
var DELAY_TIME = 1000 * 1; // 1초

// 구글에서 검색
var WORD = '고양이';
var TARGET_URL = 'https://www.google.co.kr/search' + 
'?source=lnms&tbm=isch&q=' + encodeURIComponent(WORD);

// 모듈 로드
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var fs = require('fs');

// 메인 윈도우 실행
var win = null;
app.on('ready', function() {
    win = new BrowserWindow({width: 1024, height: 800});
    win.loadURL(TARGET_URL);
    // 페이지 로드가 안료되면 캡처 수행
    win.webContents.on('did-finish-load', captureFunc);
});

// 캡처 처리 함수
function captureFunc() {
    // 딜레이를 준다
    setTimeout(function() {
        // 적절한 이름으로 저장한다
        var fname = 'cat-' + (new Date()).getTime() + '.png';
        win.capturePage(function(img) {
            fs.writeFileSync(fname, img.toPng());
            app.quit(); // 앱 자동 종료
        });
    }, DELAY_TIME);
}
