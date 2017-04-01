const
    delayTime = 1000 * 1,
    word = "북유럽",
    targetUrl = `https://www.google.com/search?source=lnms&tbm=isch&q=${encodeURIComponent(word)}`,

    electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    fs = require('fs');

let win = null;

let captureFunc = _ => {
    setTimeout(_ => {
        let fname = `scandinavia-${new Date().getTime()}.png`;
        win.capturePage(function(img){
            fs.writeFileSync(fname, img.toPng());
            app.quit();
        })
    }, delayTime);
};

app.on('ready', function(){
    win = new BrowserWindow({width: 1024, height: 800});
    win.loadURL(targetUrl);
    win.webContents.on('did-finish-load', captureFunc);
});
