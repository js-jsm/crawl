const targetUrl = 'http://jpub.tistory.com';
const casper = require('casper').create();
casper.start(targetUrl, function() {
  this.echo(casper.getTitle());
});

casper.run();
