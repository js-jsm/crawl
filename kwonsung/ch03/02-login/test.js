const casper = require('casper').create({verbose: true, logLevel: 'debug'});

// URL 및 로그인 정보 변수
const url = 'https://www.facebook.com/';

// casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36');

casper.start(url, function() {
  this.capture('test.png');
});

casper.run();