const casper = require('casper').create({
  verbose: true,
  logLevel: 'debug'
});

const url = 'http://mail.naver.com/login?url=http://note.naver.com';
const id = '';
const password = '';

casper.start();
casper.open(url);

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
  const getMail = function(){
    const count = document.querySelector('._mail ._count').innerText;
    return count ? count : 0;
  };
  const getMessage = function(){
    const count = document.querySelector('._note ._count').innerText;
    return count ? count : 0;
  };
  casper.echo('새 메일 수 : ' + this.evaluate(getMail));
  casper.echo('새 쪽지 수 : ' + this.evaluate(getMessage));
});

casper.run();
