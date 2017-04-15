// 네이버 검색 for Node.js

// 모듈 로드
var https = require('http');
var parseString = require('xml2js').parseString;

// 검색어 및 파라미터 설정
var keyword = '주꾸미'; // 검색어 지정

var client_id = '발급받은 ID';
var client_secret = '발급 받은 secret';
var host = 'openapi.naver.com';
var post = 443;
var uri  = '/vl/search/blog.xml?query=' + encodeURIComponent(keyword);

var option = {
  host   : host,
  port   : port,
  path   : uri,
  method : 'GET',
  headers : {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret':client_secret}
};

var result = '';

// API요청
var req = https.request(options, function(res) {
  res.setEncoding('utf8');

  res.on('data', function(chunk) {
    result = result + chunk;
  });
  res.on('end', function() {
    // XML을 JSON으로 변환 후 검색 결과 출력
    parseString(result, function(err, pStr) {
      var items = pStr.rss.channel[0].item;
      for(var i in items) {
        console.log('user : ' + items[i].bloggername[0]);
        console.log('title : ' + items[i].title[0]);
        console.log('DESC : ' + items[i].description[0]);
      }
    });
  });
});

req.end();
