var http = require('http'),
  iconv = require('iconv-lite');

http.get("http://www.naver.com/", function(res) {
  res.pipe(iconv.decodeStream('utf-8')).collect(function(err, decodedBody) {
    console.log(decodedBody);
  });
});