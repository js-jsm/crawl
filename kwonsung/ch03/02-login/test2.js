const casper = require('casper').create({verbose: true, logLevel: 'debug'});

// URL 및 로그인 정보 변수
const url = 'https://www.facebook.com/login';

casper.start(url, function() {
  this.capture('test2.png');
});

casper.run();