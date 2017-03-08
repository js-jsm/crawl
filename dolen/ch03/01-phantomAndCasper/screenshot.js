const casper     = require('casper').create(),
      TARGET_URL = 'http://jpub.tistory.com';

casper
    .start()
    .open(TARGET_URL)
    .then(function() {
        casper.capture('screenshot.png');
    })
    .run();