const savePath = './test.pdf',
      casper   = require('casper').create();

casper.start();

casper.page.paperSize = {
        width: '8.5in',
        height: '11in',
        orientation: 'portrait',
        margin: '1cm'
    };

casper
    .open('http://jpub.tistory.com/')
    .then(function() {
        casper.capture(savePath)
    })
    .run();