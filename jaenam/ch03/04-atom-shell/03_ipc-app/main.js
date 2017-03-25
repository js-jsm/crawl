const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

let mainWindow = null;
app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

ipc.on('mul-sync', function(e, arg) {
  console.log(arg);
  e.returnValue = arg.a * arg.b;
});

ipc.on('mul-async', function(e, arg) {
  console.log(arg);
  const res = arg.a * arg.b;
  e.sender.send('mul-async-reply', res);
});
