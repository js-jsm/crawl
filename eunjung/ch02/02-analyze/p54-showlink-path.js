//<상대 URL을 절대 URL 로 변경>
// url 모듈의 resolve() 함수에 기본 url 과 상대 url 을 인자로 주면 절대 경로가 반환된다.

var client = require('cheerio-httpcli');
var urlType = require('url');
var url = 'http://jpub.tistory.com';
var param = {};

client.fetch(url, param, function(err, $, res) {
      if(err) {
        console.log('Error : ', err);
        return;
      }

      console.log($);

      $('a').each(function(idx) {
        var text = $(this).text();
        var href = $(this).attr('href');
        if(!href) {
          return;
        }
        var href2 = urlType.resolve(url, href);
        console.log(text + ': ' + href);
        console.log(' => ' + href2 + '\n');
      });
  }
);
