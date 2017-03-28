// 커맨드 라인 인자로 지정한 웹 페이지를 캡처 for Casperjs

var casper = require('casper').create();
var utils = require('utils');

//인자 얻기
// casper에 지정한 인자가 casper.cli.args에 배열 형식으로 들어간다.
var args = casper.cli.args;
if (args.length < 1) {
  //사용법 표시
  casper.echo('users:');
  casper.echo('shot-tool URL [savepath]');
  casper.exit();
}

var savepath = 'screenshot.png';
var url = args[0];
if (args.length >=2 ) {
  savepath = args[1];
}

// Casperjs 처리 개시
casper.start();
casper.viewport(1024, 768);
casper.then(function() {
  this.capture(savepath, {
    top:0, left:0, width:1024, height:768
  });
});

casper.run();
