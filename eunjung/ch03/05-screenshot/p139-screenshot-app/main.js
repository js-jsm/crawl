const electron      = require('electron'),
      fs            = require('fs'),
      app           = electron.app,
      BrowserWindow = electron.BrowserWindow,
      TARGET_URL    = `https://atom.io`;

let win = null;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 1024,
        height: 800
    });

    win
    .loadURL(TARGET_URL);

    win
    .webContents.on('did-finish-load', () => {
        win.capturePage(img => {
            fs.writeFileSync('./screenshot.png', img.toPng())
        });
    });
});