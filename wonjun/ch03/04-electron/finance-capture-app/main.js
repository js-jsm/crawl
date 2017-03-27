const TARGET_URL = 'http://finance.naver.com';

const DELAY_TIME = 1000 * 1;

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
  setTimeOut(function() {
    var t = new Date();
    var fname = `finance-${t.getFullYear()}-${1 + t.getMonth()}-${t.getDate()}.png`;

    win.capturePage(function(img) {
        fs.writeFileSync(fname, img.toPng());
        app.quit();
    });
},DELAY_TIME);
}
