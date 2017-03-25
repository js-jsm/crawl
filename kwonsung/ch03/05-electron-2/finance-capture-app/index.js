const electron = require('electron');
const app = electron.app;
const BrowsereWindow = electron.BrowserWindow;
const fs = require('fs');
const TARGET_URL = 'http://finance.naver.com';

app.on('ready', () => {
  let win = new BrowsereWindow({
    width: 800,
    height: 800
  });
  win.loadURL(TARGET_URL);
  win.webContents.on('did-finish-load', () => {
    win.capturePage(img => {
      const t = new Date();
      const F_NAME = `${__dirname}/finance-${t.getFullYear()}-${1 + t.getMonth()}-${t.getDate()}.png`;
      fs.writeFileSync(F_NAME , img.toPNG());
    });
  });
});

