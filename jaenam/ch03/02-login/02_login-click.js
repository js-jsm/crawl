const casper = require('casper').create({
  verbose: true,
  logLevel: 'debug'
});

const url = 'http://mail.naver.com/login?url=http://note.naver.com';
const id = '';
const password = '';

casper.start();
casper.open(url);
casper.viewport(1024, 768);

casper.then(function() {
  casper.mouseEvent('click', '.btn_login');
});

casper.wait(1000);

casper.then(function() {

  const path = '#frmNIDLogin';
  if(casper.exists(path)) {
    casper.fill(path, {
      id: id,
      pw: password
    });
    casper.mouseEvent('click', '.btn_global');
  }
});

casper.wait(2000);

casper.then(function() {
  casper.capture('capture.png', {
    top: 115,
    left: 0,
    width: 220,
    height: 190
  });
});

casper.run();
