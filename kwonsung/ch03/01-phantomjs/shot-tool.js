// 커맨드 라인 인자로 지정한 웹 페이지를 캡처 for CasperJS

// CasperJS 객체 생성
const casper = require('casper').create();

// 인자 얻기
const args = casper.cli.args;
if(!args.length) {
  // 사용법 표시
  casper.echo('USES:');
  casper.echo('shoot-tool URL [savepath]');
  casper.exit();
}

const savepath = args[1] || 'shot.png';
const url = args[0];

// casperJS 시작
casper.start();
casper.viewport(1024, 768);
casper.open(url);

casper.then(function() {
  this.capture(savepath, {
    top: 0,
    left: 0,
    width: 1024,
    height: 768
  });
});

casper.run();