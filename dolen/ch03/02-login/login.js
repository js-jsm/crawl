const casper = require('casper').create({
    verbose: true,
    logLevel: 'debug'
});

const url = 'http://mail.naver.com/login?url=http%3A%2F%2Fmail.naver.com%2F',
      id = '',
      password = '';

casper
    .start()
    .open(url)
    .then(function() {
        casper.mouseEvent('click', '.btn_login');
    })
    .wait(3000)
    .then(function() {
        casper
            .fill('#frmNIDLogin', {
                id: id,
                pw: password
            })
           .mouseEvent('click', '.btn_global');
    })
    .wait(3000)
    .then(function() {
        const getCurrentCount = function() {
            return document.querySelector('#headUnreadNum').innerText;
        };

        const getTotalEmail = function() {
            return document.querySelector('#headTotalNum').innerText;
        };

        console.log('읽지 않은 메일 수 : ' + this.evaluate(getCurrentCount));
        console.log('전체 메일 수:' + this.evaluate(getTotalEmail));
    })
    .run();