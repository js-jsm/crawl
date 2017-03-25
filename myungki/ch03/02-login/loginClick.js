const casper = require('casper').create({verbose: true, logLevel: 'debug'});

const url = 'https://nid.naver.com/nidlogin.login';
const id = '';
const password = '';

casper.start();
casper.open(url);

casper.then(function(){
    casper.fill('#id', {
        loginId: id,
        password: password
    }, true);
});

casper.then(function(){
    const path = '.login_form input.btn_global';

    if ( casper.exists(path) ) {
        casper.mouseEvent('click', path);
    }

    casper.wait(3000);
});

casper.then(function(){
    casper.capture('capture.png', {
        top: 0,
        left: 0,
        width: 1024,
        height: 768
    });
});

casper.run();
