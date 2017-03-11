const casper = require('casper').create({verbose: true, logLevel: 'debug'});

const url = 'https://nid.naver.com/nidlogin.login';
const id = '';
const password = '';

casper.start();
casper.open(url);

casper.then(function(){
    casper.fill('.login_form', {
        loginId: id,
        password: password
    }, true);
});

casper.then(function(){
    var getComment = function(){
        return document.querySelector('#mail_count_profile > .cnt').innerText;
    };
    console.log('메일 갯수 : ' + this.evaluate(getComment));
});
