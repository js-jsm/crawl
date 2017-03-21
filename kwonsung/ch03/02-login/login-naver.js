const casper = require('casper').create({verbose: true, logLevel: 'debug'});
const naver = require('./user.json').naver;

// URL 및 로그인 정보 변수
const url = 'https://nid.naver.com/nidlogin.login?url=http%3A%2F%2Fwww.naver.com';
const id = naver.id;
const pw = naver.pw;

casper.start();
casper.open(url);

casper.then(function() {
  this.fill('#frmNIDLogin', {
    id: id,
    pw: pw}, true);
  this.wait(5000);
});

casper.then(function() {
  const cntMail = function() {
    const iframe = document.getElementById("minime").contentWindow.document;
    return iframe.querySelector('#mail_count_profile > span').innerText;
  };
  const test = function(qq) {
    return qq;
  };

  this.capture('naver.png');
  console.log("메일 갯수: " + this.evaluate(cntMail));
  this.echo(this.evaluate(test, 'aasssddff'));
});


casper.run();
