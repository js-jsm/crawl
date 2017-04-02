const
    targetUrl = "https://atom.io",
    electron = require('electron'),
    app = electron.app;
    BrowserWindow = electron.BrowserWindow,
    fs = require('fs');

let win = null;
app.on('ready', function(){
    win = new BrowserWindow({width: 1024, height: 800});
    win.loadURL(targetUrl);
    win.webContents.on('did-finish-load', captureFunc);
});

function captureFunc(){
    win.capturePage(function(img){
        fs.writeFileSync('screenshot.png', img.toPng());
    });
}
