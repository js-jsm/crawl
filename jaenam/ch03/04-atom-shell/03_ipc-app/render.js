(function() {
  const electron = require('electron');
  const ipc = electron.ipcRenderer;
  const info = document.getElementById('info');

  const testSync = () => msg(`sync result = ${ipc.sendSync('mul-sync', { a: 30, b: 2 })}`);
  const testAsync = () => {
    ipc.send('mul-async', { a: 30, b: 2 });
    ipc.on('mul-async-reply', (e, arg) => msg(`async result = ${arg}`));
  };
  const msg = msg => info.innerHTML += msg + '<br/>';

  testSync();
  testAsync();
})();
