//main.js
const
    electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    ipc = electron.ipcMain;

var mainWin = null;

app.on('ready', function(){
    mainWin = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWin.loadURL('file://' + __dirname + '/index.html');
    mainWin.on('closed', function(){
        mainWin = null;
    });
});

ipc.on('mul-sync', function(event, arg){
    console.log(arg);
    event.returnValue = arg.a * arg.b;
});

ipc.on('mul-async', function(event, arg){
    console.log(arg);
    var result = arg.a * arg.b;
    event.sender.send('mul-async-reply', result);
});
