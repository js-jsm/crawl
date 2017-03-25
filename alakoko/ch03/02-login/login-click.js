var casper = require('casper').create({verbose: true, logLevel: "debug"});

var url = "https://nid.naver.com/nidlogin.login?url=http%3A%2F%2Fwww.naver.com";
var id = "";
var password = "";

casper.start();

casper.open(url);

//로그인
casper.then(function(){
  casper.fill("#frmNIDLogin",
  {
    id : alako_ko,
    pw :
  },true);
});

//마우스 클릭
casper.then(function(){
  var path = "#blogInfo > ul > li:nth-child(2) > span.txt > a";
  if(casper.exists(path)){
    casper.mouseEvent('click', path);
  }
  casper.wait(3000);
});

casper.then(function(){
  casper.capture('capture.png', {
    top:0,
    left:0,
    width:1024,
    height:768
  });
});

casper.run();
