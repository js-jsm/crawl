const electron = require('electron');
const app = electron.app;
const BrowsereWindow = electron.BrowserWindow;

app.on('ready', () => {
  let win = new BrowsereWindow({
    width: 800,
    height: 600
  });
  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', () => win = null)
});