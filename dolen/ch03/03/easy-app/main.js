const electron      = require('electron'),
      app           = electron.app,
      BrowserWindow = electron.BrowserWindow,
      TARGET_URL    = 'https://ko.wikipedia.org';

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadURL(TARGET_URL);
});