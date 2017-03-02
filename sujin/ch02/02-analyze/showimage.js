//모듈 로드
//node_modules에서 cheerio-httpcli과 url 모듈을 가지고와서 변수에 저장을 한다.
var client = require('cheerio-httpcli');
var urlType = require('url');

//다운로드
// url : unique resource location, uri : unique resource identified
var url = 'https://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지');
var param = {};

//client 안에 있는 fetch 함수를 실행 시키는데 매개변수로는 url, param, cbf를 가지고 있음
//
client.fetch(url, param, function(err, $) {
    if(err) {
      console.log('error : ' + err);
      return;
    }
    //img태그를 가져와라.
    $('img').each(function(idx) {
      var src = $(this).attr('src');
      src = urlType.resolve(url, src);
      console.log(src + ': src')
    });
});
