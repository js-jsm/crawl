var casper  = require('casper').create(),
    utils   = require('utils'),
    args    = casper.cli.args;

if(args.length < 1) {
    casper.echo('uses:').echo('shot-tool URL [savepath]').exit();
}

var savepath    = 'screenshot.png',
    url         = args[0];

if(args.length >= 2) {
    savepath = args[1];
}


casper  .start()
        .viewport(1024, 768)
        .open(url)
        .then(
            function() {
                this.capture(
                    savepath,
                    {top:0, left:0, width:1024, height:768}
                );
            }
        )
        .run();
