const casper     = require('casper').create(),
      TARGET_URL = 'http://www.flickr.com/search';

casper
    .start()
    .viewport(1400, 800) //viewport 설정
    .userAgent('User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36')
    .open(TARGET_URL + '?text=' + encodeURIComponent('고양이'))
    .then(function() {
        this.capture('flickr-cat.png', {
            top: 0,
            left: 0,
            width: 1400,
            height: 800
        });
    })
    .run();
