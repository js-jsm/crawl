// 모듈 로드
//node_modules에서 cheerio-httpcli과 url을 가져와 변수에 저장을 한다.
var client = require('cheerio-httpcli');
var urlType = require('url');

var url = 'http://jpub.tistory.com';
var param = {};

client.fetch(url, param, function (err, $) {
    if (err) {
      console.log('error : ' + err);
      return;
    }
    $('a').each(function(idx) {
      var text = $(this).text();
      var href = $(this).attr('href');
      if(!href) return;

      var href2 = urlType.resolve(url, href);
      console.log(text + ':' + href);
      console.log(' =>' + href2 + '\n');
    })
  }
);
