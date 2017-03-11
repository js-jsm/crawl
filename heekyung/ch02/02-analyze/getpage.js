// 모듈 로드
var client = require('cheerio-httpcli');

// 다운로드
var url = 'http://jpub.tistory.com';
var param = {};

client.fetch(url, param, function(err, $, res) {
    // 에러 체크
    if(err) {
        console.log('Error : ', err);
        return;
    }
    var body = $.html();
    console.log(body);
});
