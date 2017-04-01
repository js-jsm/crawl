var client = require('cheerio-httpcli');

var url = 'http://jpub.tistory.com';
var param = {};

//fetch = get
client.fetch(url, param, function(err, $) {

  if (err) {
    console.log('Error : ', err);
    return;
  }
  //p49 책 수정
  var html = $.html();
  console.log(html);

});
