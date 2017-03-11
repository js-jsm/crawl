const casper     = require('casper').create(),
      utils      = require('utils'),
      args       = casper.cli.args;

if(args.length < 1) {
    casper
        .echo('USES:')
        .echo('shot-tool URL [savePath]')
        .exit();
}

const url = args[0];

if(args.length >= 2)
    savePath = args[1];

casper
    .start()
    .viewport(1024, 768)
    .open(url)
    .then(function() {
        this.capture('shot-tool.png', {
            top: 0,
            left: 0,
            width: 1024,
            height: 768
        });
    })
    .run();
