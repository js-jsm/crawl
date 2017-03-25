const TARGET_URL = 'https://ko.wikipedia.org';

const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

app.on('ready', function() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadURL(TARGET_URL);
});
