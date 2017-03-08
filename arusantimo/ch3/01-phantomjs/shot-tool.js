const casper = require('casper').create();

const args = casper.cli.args; //인자 값을 알아 내기
if (args.length < 1) {
  casper.echo("USES:");
  casper.echo("shot-tool URL [savepath]");
  casper.exit();
}

casper.start();
casper.viewport(1024, 768);
casper.open(args[0]);
casper.then(function(){
  this.capture(args.length >= 2 ? args[1] : 'default.png', {
    top:0, left:0, width:1024, height:768
  });
});
casper.run();
