const TARGET_URL = 'https://atom.io';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;
const fs = require('fs');

var mainWindow = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });


  mainWindow.loadURL(TARGET_URL);
  mainWindow.webContents.on('did-finish-load', captureFunc);
});

function captureFunc() {
    mainWindow.capturePage(function(img) {
      fs.writeFileSync('screenshot.png', img.toPng());
    });
}
