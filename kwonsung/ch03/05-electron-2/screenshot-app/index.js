const electron = require('electron');
const app = electron.app;
const BrowsereWindow = electron.BrowserWindow;
const fs = require('fs');
const TARGET_URL = 'https://atom.io';

app.on('ready', () => {
  let win = new BrowsereWindow({
    width: 1024,
    height: 800
  });
  win.loadURL(TARGET_URL);
  win.webContents.on('did-finish-load', () => {
    win.capturePage(img => (
      fs.writeFileSync(__dirname + '/screenshot.png', img.toPNG())
    ));
  });
});

