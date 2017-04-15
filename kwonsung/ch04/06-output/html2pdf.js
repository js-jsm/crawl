/*
const casper = require('casper').create();

const URL = 'http://jpub.tistory.com/';
const SAVEPATH = 'test.pdf';

casper.start();
casper.page.paperSize = {
  width: '8.5in',
  height: '11in',
  orientation: 'portrait',
  margin: '1cm'
};
casper.open(URL);
casper.then(() => casper.capture(SAVEPATH));
casper.run();*/

var casper = require('casper').create();

var UrL = 'http://jpub.tistory.com/';
var savepatH = 'test.pdf';

casper.start();
casper.page.paperSize = {
  width: '8.5in',
  height: '11in',
  orientation: 'portrait',
  margin: '1cm'
};
casper.open(UrL);
casper.then(function() {
  casper.evaluate(function() {
    var els = document.querySelectorAll('h3');
    for(var i=0; i<els.length; i++) {
      els[i].style.backgroundColor = 'red';
      els[i].style.color= 'white';
    }
  })
});
casper.then(function() {
  casper.capture(savepatH);
});
casper.run();

//HTML 을 PDF로 출력 CasperJS

//제이펍 페이지
var url = 'http://jpub.tistory.com/';
var savepath = 'test.pdf';

//CasperJS 오브젝트 생성
var casper = require('casper').create();
casper.start();

//페이지 설정
casper.page.paperSize = {
  width : '8.5in',
  height : '1lin',
  orientation : 'portrait',
  margin : '1cm'
};
casper.open(url);
casper.then(function() {
  casper.capture(savepath);
});

casper.run();
