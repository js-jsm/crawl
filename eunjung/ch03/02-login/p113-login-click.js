var casper  = require('casper').create({vargose: true, logLevel: 'debug'}),
    url     = 'http://로그인이필요한url',
    id      = '';
    password= '';

casper.start();
casper.open(url);

casper.then(
    function() {
        casper.fill(
            '#authtForm',
            {
                login: id,
                password: password
            }
        );
    }
);

casper.then(
    function() {
        var path = '#blogInfo > ul > li:nth-child(2) > span.txt > a';
        if(casper.exists(path)) {
            casper.mouseEvent('click', path);
        }
        casper.wait(3000);
    }
);

casper.then(
    casper.capture(
        'capture.png',
        {
            top: 0,
            left: 0,
            width: 1024,
            height: 768
        }
    );
);

casper.run();
