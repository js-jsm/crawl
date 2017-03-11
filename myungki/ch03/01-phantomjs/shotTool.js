const casper = require('casper').create();
const utils = require('utils');

const args = casper.cli.args;

if ( args.length < 1 ) {
    casper.echo('USES:');
    casper.echo('shotTool url [savapath]');
    casper.exit();
}

const savepath = "screenshot.png";
const url = args[0];

if ( args.length >= 2 ) {
    savepath = args[1];
}

casper.start();
casper.viewport(1024, 768);
casper.open(url);
casper.then(function(){
    this.capture(savepath, {
        top: 0,
        left: 0,
        width: 1024,
        height: 768
    });
});

casper.run();
