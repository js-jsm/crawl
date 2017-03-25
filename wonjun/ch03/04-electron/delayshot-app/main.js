const TARGET_URL = `https://www.google.co.kr/search?source=lnms&tbm=isch&q=${encodeURIComponent('고양이')}`;

const DELAY_TIME = 2000 * 1;

const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

const fs = require('fs');

let win = null;

app.on('ready', function() {
  win = new BrowserWindow({width: 800, height: 800});
  win.loadURL(TARGET_URL);

  win.webContents.on('did-finish-load', captureFunc);
})

function captureFunc() {
  setTimeout(function() {
    var fname = `cat-${(new Date()).getTime()}.png`;
    win.capturePage(function(img) {
        fs.writeFileSync(fname, img.toPng());
        app.quit();
    });
}, DELAY_TIME);
}

//캡쳐할 범위 지정도 가능하다.
