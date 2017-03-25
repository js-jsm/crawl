const electron = require('electron');
const app = electron.app;
const BrowsereWindow = electron.BrowserWindow;
const fs = require('fs');
const WORD = '고양이';
const TARGET_URL = 'https://www.google.co.kr/webhp?sourceid=chrome-instant&rlz=1C5CHFA_enKR721KR721&ion=1&espv=2&ie=UTF-8#q='
  + encodeURIComponent(WORD);
let win = null;

const capture = () => {
  setTimeout(() => {
    const F_NAME = __dirname + '/cat-' + (new Date()).getTime() + '.png';
    win.capturePage(img => {
      fs.writeFileSync(F_NAME, img.toPNG());
      app.quit();
    })
  }, 2000);
};

app.on('ready', () => {
  win = new BrowsereWindow({
    width: 1024,
    height: 800
  });
  win.loadURL(TARGET_URL);
  win.webContents.on('did-finish-load', capture);
});

