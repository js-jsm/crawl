const {
  electron,
  app,
  BrowserWindow
} = require('electron');
const fs = require('fs');

// 메인 윈도우 기동
let win = null;
app.on('ready', () => {
  win = new BrowserWindow({width:800, height:800});
  win.loadURL("http://finance.naver.com");
  // 페이지 로드가 완료되면 캡쳐
  win.webContents.on('did-finish-load', captureFunc);
});

// 캡쳐 처리 함수
function captureFunc() {
  // 일자를 파일 이름에 붙여서 파일에 저장 --- (※1)
  const t = new Date();
  const fname = "finance-" + t.getFullYear() +
    "-" + (1 + t.getMonth()) +
    "-" + t.getDate() + ".png";

  win.capturePage((img) => {
    fs.writeFileSync(fname, img.toPng());
    app.quit(); // 애플리케이션 자동 종료
  });
}
