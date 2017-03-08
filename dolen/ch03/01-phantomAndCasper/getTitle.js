const casper     = require('casper').create(),
      TARGET_URL = 'http://jpub.tistory.com';

casper
    .start(TARGET_URL, function() {
        this.echo(casper.getTitle());
    })
    .run();
