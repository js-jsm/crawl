const TARGET_URL = 'https://ko.wikipedia.org/';

const electron = require('electron');
const app = electron.app;
const BrowsereWindow = electron.BrowserWindow;

app.on('ready', () => {
  const win = new BrowsereWindow({
    width: 800,
    height: 800
  });
  win.loadURL(TARGET_URL);
});