var TARGET_URL  = 'http://jpub.tistory.com',
    casper      = require('casper').create(),
    fnc         = function() {
                    casper.capture('screenshot3.png');
                };

casper  .start()
        .userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1') // 아이폰임을 알림
        .viewport(750, 334)
        .open(TARGET_URL)
        .then(fnc)
        .run();
