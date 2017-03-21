const casper = require('casper').create();
casper.start("http://jpub.tistory.com", function() {
  this.echo(casper.getTitle());
});
casper.run();