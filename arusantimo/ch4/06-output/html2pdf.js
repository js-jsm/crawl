const url = "http://jpub.tistory.com/";
const savepath = "test.pdf";
const casper = require('casper').create();
casper.start();
casper.page.paperSize = {
  width: '8.5in',
  height: '11in',
  orientation: "portrait",
  margin: '1cm'
};
casper.open(url);
casper.then(() => {
  casper.capture(savepath);
});
casper.run();


