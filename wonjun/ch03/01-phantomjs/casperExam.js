const targetUrl = 'http://jpub.tistory.com';
const userAgent = {
  default: [
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) ',
    'AppleWebKit/537.11 (KHTML, like Gecko) ',
    'Chrome/23.0.1271.97 Safari/537.11',
  ],
  iphone: [
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X)',
    'AppleWebKit/601.1.46 (KHTML, like Gecko)',
    'Version/9.0 Mobile/13B143 Safari/601.1',
  ]
};

const casper = require('casper').create({
  verbose: true,
  logLevel: 'info',
  pageSettings: {
    userAgent: userAgent.iphone.join(''),
  }
});

const utils = require('utils');

const keyword = encodeURIComponent('고양이');

// getTitle
casper.start(targetUrl, function() {
  this.echo(casper.getTitle());
});

// screenshot
casper.then(function() {
  casper.capture('screenshot.png');
});

//flickr img capture
casper.then(function() {
  casper.viewport(1400, 800)
  .open('https://flickr.com/search/?text=' + keyword)
  .then(function() {
    this.capture('flickr-cat.png', {
      top: 0,
      left: 0,
      width: 1400,
      height: 800,
    });
  });
});

//looks like iphone screentshot.
//point is userAgent
casper.then(function() {
  casper.viewport(750, 1334)
  .open(targetUrl)
  .then(function() {
    this.capture('iphone.png');
  })
});

//shot-tool.js
const args = casper.cli.args;

if (args.length < 1) casper.echo('USES:').echo('shot-tool URL [savepath]').exit();

console.log(args)

const savepath = 'shot-tool.png';

const url = args[0];

if (args.length >= 2) {
  savepath = args[1];
}

casper.start().viewport(1024, 768).open(url).then(function() {
  this.capture(savepath, {
    top: 0, left: 0, width: 1024, height: 768,
  })
});

casper.run();
