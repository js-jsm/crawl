const casper = require('casper').create();
casper.start();
casper.open('http://jpub.tistory.com');
casper.start(function() {
    this.capture('screenshot.png');
});

casper.run();
