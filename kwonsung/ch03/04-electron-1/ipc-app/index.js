const electron = require('electron');
const app = electron.app;
const BrowsereWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

app.on('ready', () => {
  let win = new BrowsereWindow({
    width: 800,
    height: 600
  });
  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', () => win = null)
});

ipc.on('mul-sync', (e, arg) => {
  console.log(arg);
  e.returnValue = arg.a * arg.b;
});

ipc.on('mul-async', (e, arg) => {
  console.log(arg);
  e.sender.send('mul-async-reply', arg.c + arg.d);
});