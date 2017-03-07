// 모듈 로드
var client = require('cheerio-httpcli');
var urlType = require('url');

// 다운로드
var url = 'http://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지');
var param = {};

client.fetch(url, param, function(err, $, res) {
    if(err) {
        console.log('error');
        return;
    }
    $('img').each(function(idx) {
        var src = $(this).attr('src');
        src = urlType.resolve(url, src);
        console.log(src);
    });
});
