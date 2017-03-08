const casper     = require('casper').create(),
      TARGET_URL = 'http://jpub.tistory.com';

casper
    .start()
    .viewport(750, 1334)
    .userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1')
    .open(TARGET_URL)
    .then(function() {
        this.capture('iphoneShot.png');
    })
    .run();
