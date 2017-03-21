const casper = require('casper').create({verbose: true, logLevel: "debug"});
const utils = require('utils');
const id = "ziziana0507@naver.com";
const password = "";
casper.start().thenOpen("https://www.facebook.com/login", () => {
  console.log('facebook connect');
});
casper.then(() => {
  casper.fill( "#login_form",
  {
    email: id,
    pass: password
  }, true);
});
casper.wait(4000);
casper.then(function() {
  casper.capture("screenshot.png");
});
casper.then(function() {
  if (casper.exists("#pinnedNav")) {
    console.log('exist')
  }
});
casper.run();