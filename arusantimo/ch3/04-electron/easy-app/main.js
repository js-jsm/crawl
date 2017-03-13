const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
app.on('ready', () => {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL("https://ko.wikipedia.org/");
});