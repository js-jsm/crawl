
const casper = require('casper').create({verbose: true, logLevel: 'debug'});
const targetUrl = 'http://bcnam.tistory.com/admin/center';
const id = '';
const password = '';

casper.start();
casper.open(targetUrl);
casper.then(function() {
  casper.fill('#authForm',{
    loginId: id,
    password: password,
  }, true);
});

// login and reply & board count scrapping
casper.then(function() {
  const getTarget = function(num) {
    return `#blogInfo > ul > li:nth-child(${num}) > span.day`;
  }
  const getComment = function() {
    return document.querySelector(getTarget(3)).innerText;
  };
  const getGuestBook = function() {
    return document.querySelector(getTarget(5)).innerText;
  };

  console.log(`새 댓글수: ${this.evaluate(getComment)}`);
  console.log(`새 방명록 수: ${this.evalueate(getGuestBook)}`);
});

//mouse event
casper.then(function() {
  const path = '#blogInfo > ul > li:nth-child(2) > span.txt > a';
  if (casper.exists(path)) {
    casper.mouseEvent('click', path);
  }
  casper.wait(3000);
});

caspser.then(function() {
  casper.capture('capture.png', {
    top: 0, left: 0, width: 1024, height: 768,
  });
});

casper.run();
