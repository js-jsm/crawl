// const targetUrl = 'https://ko.wikipedia.org/';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', function() {
  let win = new BrowserWindow({
    width: 800,
    height: 600
  });
  // win.loadURL(targetUrl);
  win.loadURL(`file://${__dirname}/index.html`);
  win.on('close', function() {
    win = null;
  });
});
