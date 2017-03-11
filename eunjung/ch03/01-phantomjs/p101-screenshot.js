var casper = require('casper').create(),
    url = 'http://jpub.tistory.com',
    fnc = function() {
            casper.capture('screenshot01.png');
        };

//
// casper.start();
//
// casper.open(url);
//
// casper.then(fnc);
//
// casper.run();

casper.start(url, fnc).run();


// casper.run() 으로 casper.start()를 호출하며 casper.start() 가 호출됨으로써
// casper.함수 로 이어지는 코드가 casperjs를 통하여 자동으로 처리된다.
