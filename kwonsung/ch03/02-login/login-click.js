const casper = require('casper').create({verbose: true, logLevel: 'debug'});
const facebook = require('./user.json').facebook;

// URL 및 로그인 정보 변수
const url = 'https://www.facebook.com/login';
const id = facebook.id;
const pw = facebook.pw;

casper.start();
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36');
casper.open(url);

casper.then(function(){
  this.fill('#login_form', {
    email: id,
    pass: pw}, true);
  this.wait(3000);
});

casper.then(function() {
  const path = '#notifications_jewel > a';
  if(casper.exists(path)) casper.mouseEvent('click', path);

});

casper.wait(5000);

casper.then(function() {
  this.capture('facebook2.png', {
    top: 0,
    left: 0,
    width: 1500,
    height: 1024
  });
});

casper.run();