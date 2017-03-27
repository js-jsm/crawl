const targetUrl = 'http://atom.io';
const { app, BrowserWindow } = require('electron');
const fs = require('fs');

let win = null;

const captureFunc = () => {
  win.capturePage(img => {
    fs.writeFileSync('screenshot.png', img.toPng());
  });
};

app.on('ready', () => {
  win = new BrowserWindow({
    width: 1280,
    height: 1024
  });
  win.loadURL(targetUrl);
  win.webContents.on('did-finish-load', captureFunc);
  win.on('closed', () => {
    win = null;
  });
});
