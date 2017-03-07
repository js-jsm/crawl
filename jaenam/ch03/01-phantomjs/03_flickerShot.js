const casper = require('casper').create();

casper.start();
casper.viewport(1400, 800);

casper.userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36");

const text = encodeURIComponent('고양이');
casper.open('https://www.flickr.com/search/?text=' + text);

casper.then(function() {
  this.capture('flickr-cat.png', {
    top: 0,
    left: 0,
    width: 1400,
    height: 800
  });
});

casper.run();
