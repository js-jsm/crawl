var client = require('cheerio-httpcli');
var urlType = require('url');

var url = 'http://jpub.tistory.com';
var param = {};

client.fetch(url, param, function(err, $) {
  if (err) {
    console.log('Error : ', err);
    return;
  }

  //jQuery each 함수
  //링크 추출하여 출력
  $('a').each(function(idx) {
    var text = $(this).text();
    var href = $(this).attr('href');
    if(!href) {
      return;
    }
    var href2 = urlType.resolve(url, href);
    //결과표시
    console.log(text + ' : ' + href);
    console.log('  =>  ' +  href2 + '\n');

  });
});
