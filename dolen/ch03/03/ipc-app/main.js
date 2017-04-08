const electron      = require('electron'),
      app           = electron.app,
      BrowserWindow = electron.BrowserWindow,
      ipc           = electron.ipcMain,
      TARGET_URL    = `file://${__dirname}/index.html`;


let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow
        .on('closed', () => {
            mainWindow = null;
        })
        .loadURL(TARGET_URL);

    ipc
        .on('mul-sync mul-async', (e, arg) => {
            console.log('arg', arg);
            e.returnValue = arg.a * arg.b;
        })
       .on('mul-async', (e, arg) => {
            console.log('arg', arg);
            e.sender.send('mul-async-reply', arg.a * arg.b);
        });
});