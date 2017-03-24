const casper = require('casper').create();
const TARGET_URL = 'http://jpub.tistory.com';
casper.start();
casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

casper.viewport(750, 1334);

casper.open(TARGET_URL);

casper.then(function() {
    this.capture('iphone-shot.png');
});

casper.run();
