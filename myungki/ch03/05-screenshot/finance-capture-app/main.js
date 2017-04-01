const
    targetURL = "http://finance.naver.com",
    electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    fs = require('fs');


const captureFunc = _ => {
    let t = new Date(),
        fname = `finance-${t.getFullYear()}-${1 + t.getMonth()}-${t.getDate()}.png`;

    win.capturePage(function(img){
        fs.writeFileSync(fname, img.toPng());
        app.quit();
    })
}

let win = null;

app.on('ready', function(){
    win = new BrowserWindow({width: 800, height: 800});
    win.loadURL(targetURL);

    win.webContents.on('did-finish-load', captureFunc);
});
