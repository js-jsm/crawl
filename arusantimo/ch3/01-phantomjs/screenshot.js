const casper = require('casper').create();
casper.start();
casper.open('http://jpub.tistory.com');
casper.then(function() {
  casper.capture("screenshot.png");
});
casper.run();