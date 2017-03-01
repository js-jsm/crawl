var client = require('cheerio-httpcli');

var url = 'http://jpub.tistory.com';
var param = {};

client.fetch(url, param, function(err, $) {

  if (err) {
    console.log('Error : ', err);
    return;
  }

  var html = $.html();
  console.log(body);

});
