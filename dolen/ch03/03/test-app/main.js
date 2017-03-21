const electron      = require('electron'),
      app           = electron.app,
      BrowserWindow = electron.BrowserWindow,
      TARGET_URL    = `file://${__dirname}/index.html`;

app.on('ready', () => {
    new BrowserWindow({
        width: 800,
        height: 600
    })
    .on('closed', () => {
        win = null;
        console.log('closed!');
    })
    .loadURL(TARGET_URL);
});