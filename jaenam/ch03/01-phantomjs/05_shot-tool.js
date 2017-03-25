const casper = require('casper').create();
const args = casper.cli.args;

if(args.length < 1) {
  casper.echo('USES: ');
  casper.echo('shot tool URL [savepath]');
  casper.exit();
}
const url = args[0];
const savepath = args[1] || 'screenshot.png';

casper.start()
  .viewport(1024, 768)
  .open(url)
  .then(function() {
    casper.capture(savepath, {
      top: 0,
      left: 0,
      width: 1024,
      height: 768
    });
  })
  .then(function() {
    casper.echo('DONE.');
  })
  .run();
