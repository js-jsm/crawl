const casper = require('casper').create({
    verbose: true,
    logLevel: 'debug'
});

const url = 'https://nid.naver.com/nidlogin.login?url=http%3A%2F%2Fmail.naver.com%2F%3Fn%3D1488976603155%26v%3Df',
      id = 'imcts11',
      password = 'cjswo1love!@!@';

casper
    .start()
    .open(url)
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