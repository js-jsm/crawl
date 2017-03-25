const delayTime = 2000;
const targetUrl = 'http://finance.naver.com';
const { app, BrowserWindow } = require('electron');
const fs = require('fs');

let win = null;

const captureFunc = () => {
  setTimeout(()=>{
    const t = new Date();
    const fname = `finance-${t.getFullYear()}-${1 + t.getMonth()}-${t.getDate()}.png`;
    win.capturePage(img => {
      fs.writeFileSync(fname, img.toPng());
      app.quit();
    });
  }, delayTime);
};

app.on('ready', () => {
  win = new BrowserWindow({
    width: 800,
    height: 800
  });
  win.loadURL(targetUrl);
  win.webContents.on('did-finish-load', captureFunc);
});
