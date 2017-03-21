//촬영 전 대기시간
const {
  electron,
  app,
  BrowserWindow
} = require('electron');
const fs = require('fs');
const TARGET_URL = `https://www.google.co.kr/search?source=lnms&tbm=isch&q="
${encodeURIComponent('고양이')}`;
const DELAY_TIME = 1000 * 1;


// 메인 윈도우 기동
const win = null;
app.on('ready', function(){
  win = new BrowserWindow({width:1024, height:800});
  win.loadURL(TARGET_URL);
  win.webContents.on('did-finish-load', captureFunc);
});

function captureFunc() {
  // 딜레이를 준다
  setTimeout(() => {
    // 적절한 이름으로 저장한다.
    const fname = "cat-" + (new Date()).getTime() + ".png";
    win.capturePage((img) => {
      fs.writeFileSync(fname, img.toPng());
      app.quit(); // 앱 자동 종료
    });
  }, DELAY_TIME);
}
