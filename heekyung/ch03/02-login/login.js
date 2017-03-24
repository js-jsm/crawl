var casper = require('casper').create({verbose: true, logLevel: 'debug'});

// URL 및 로그인 정보 변수
var url = 'http://본인 티스토리 블로그 주소/admin/center/';
var id = '';
var password = '';

casper.start();

casper.opne(url);

//Form Submit
casper.then(function() {
    casper.fill('#authForm', {
        loginId : id,
        password : password
    }, true);
});

// 로그인 후 수행
casper.then(function() {
    var getComment = function() {
        // 페이지 내의 document 객체 사용
        return document.querySelector('#blogInfo > ul > li:nth-child(3) > span.day').innerText;
    };
    console.log('새 댓글 수 : ' + this.evaluate(getComment)); // evaluate() 메소드
});

casper.then(function() {
    var getGuestBook = function() {
        return document.querySelector('#blogInfo > ul > li:nth-child(5) > span.day').innerText;
    };
    console.log('새 방명록 수 : ' + this.evaluate(getGuestBook))
});

//실행 개시
casper.run();
