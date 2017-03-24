var casper = require('casper').create({verbose: true, logLevel: "debug"});

var url = "https://nid.naver.com/nidlogin.login?url=http%3A%2F%2Fwww.naver.com";
var id = "";
var password = "";

casper.start();

casper.open(url);

// Form Submit

casper.then(function(){
  casper.fill("#frmNIDLogin",
  {
    id : alako_ko,
    pw : 
  },true);
});

//로그인 후 수행
casper.then(function(){
  var countEmail = function(){
    //페이지 내의 document 객체 사용
    return document.querySelector(".link_mail span.cnt").innerText;
  };
  console.log("메일수 : " + this.evaluate(countEmail));//evalutate 메소드
});

casper.then(function(){
  var countReply = function(){
    return document.querySelector(".link_note span.cnt").innerText;
  };
  console.log("쪽지수 : " + this.evaluate(countReply));
});

casper.run();
