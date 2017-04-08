var client = require('cheerio-httpcli');

var url = 'http://jpub.tistory.com';
var param = {};

client.fetch(url, param, function(err, $) {

  if (err) {
    console.log('Error : ', err);
    return;
  }
  //jQuery each 함수
  $('a').each(function(idx) {
    var text = $(this).text();
    var href = $(this).attr('href');
    console.log(text + ' : ' + href);

  });

});
