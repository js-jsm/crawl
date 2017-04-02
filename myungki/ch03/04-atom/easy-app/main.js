//main.js
const targetUrl = "https://kr.wikipedia.org";

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', function(){
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadURL(targetUrl);
});
