const targetUrl = 'http://jpub.tistory.com';
const casper = require('casper').create();
casper.start();

casper.userAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1");

casper.viewport(750, 1334);
casper.open(targetUrl);

casper.then(function(){
  this.capture('screenshot.png');
});

casper.run();
