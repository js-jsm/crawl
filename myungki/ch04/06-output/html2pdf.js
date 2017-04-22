const
    url = "http://jpub.tistory.com/",
    savepath = "test.pdf",
    casper = require('casper').create();

casper.start();

casper.page.paperSize = {
    width: '8.5in',
    height: '11in',
    orientation: "portrait",
    margin: '1cm'
};

casper.open(url);

casper.then(_ => {
    casper.capture(savepath);
});

casper.run();
