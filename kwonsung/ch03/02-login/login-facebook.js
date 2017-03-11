const casper = require('casper').create({verbose: true, logLevel: 'debug'});
const facebook = require('./user.json').facebook;

// URL 및 로그인 정보 변수
const url = 'https://www.facebook.com/login';
const id = facebook.id;
const pw = facebook.pw;

casper.start();
casper.open(url);

casper.then(function(){
  this.fill('#login_form', {
    email: id,
    pass: pw}, true);
  this.wait(3000);
});

casper.then(function() {
  const cntEarth = function() {
    return document.querySelector('#notifications_jewel > a > div > span').innerText;
  };
  const test = function(qq) {
    return qq;
  };

  this.capture('facebook.png');
  console.log("지구본: " + this.evaluate(cntEarth));
  this.echo(this.evaluate(test, 'aasssddff'));
});


casper.run();
