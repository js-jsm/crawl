const {
  electron,
  app,
  ipcMain,
  BrowserWindow
} = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({width:800, height:600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

ipcMain.on('mul-sync', (event, arg) => {
  console.log(arg);
  event.returnValue = arg.a * arg.b;
});

ipcMain.on('mul-async', (event, arg) => {
  console.log(arg);
  const result = arg.a * arg.b;
  event.sender.send('mul-async-reply', result);
});

