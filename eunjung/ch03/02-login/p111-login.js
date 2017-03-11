// <로그인 후 데이터 다운로드>

var casper  = require('casper').create({vargose: true, logLevel: "debug"}),
    url     = "http://로그인필요한url.com",
    id      = '',
    password= '';

casper  .start()
        .open(url)
        .then(function() {
            casper.
        }, true)
        .then(function() {
            var getComment = function() {
                return document .querySelector('#blogInfo > ul > li:nth-child(3) > span.day')
                                .innerText;
            }
            console.log('새 댓글 수 : ' + this.evaluate(getComment));
        })
        .then(function() {
            var getGuestBook = function() {
                return document .querySelector('#blogInfo > ul > li:nth-child(5) > span.day')
                                .innerText;
            };
            console.log('새 방명록 수 : ' + this.evaluate(getGuestBook));
        })
        .run();
