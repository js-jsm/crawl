// 사용법 : electron 03_delayshot-app x10 y10 w1200 h800

const [ , , ...argv] = process.argv;
const delayTime = 2000;
const targetUrl = 'http://finance.naver.com';
const { app, BrowserWindow } = require('electron');
const fs = require('fs');

const keys = {
  x: 'x',
  y: 'y',
  w: 'width',
  h: 'height'
};

const rect = argv.reduce((p,c) => {
  p[keys[c[0]]] = +c.slice(1);
  return p;
}, {
  x: 0,
  y: 0,
  width: 1024,
  height: 768
});

let win = null;

const captureFunc = () => {
  setTimeout(()=>{
    const t = new Date();
    const fname = `finance-${t.getFullYear()}-${1 + t.getMonth()}-${t.getDate()}.png`;
    win.capturePage(rect, img => {
      fs.writeFileSync(fname, img.toPng());
      app.quit();
    });
  }, delayTime);
};

app.on('ready', () => {
  win = new BrowserWindow({
    width: rect.width,
    height: rect.height
  });
  win.loadURL(targetUrl);
  win.webContents.on('did-finish-load', captureFunc);
});
