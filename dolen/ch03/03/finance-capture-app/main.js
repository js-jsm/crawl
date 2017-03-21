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
        const now = new Date();

        win.capturePage(img => {
            fs.writeFileSync(`./${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}.png`, img.toPng())
        });
    });
});