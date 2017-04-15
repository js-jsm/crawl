// 플리커 에서 사진 검색

// 모듈 로드
var client = require('cherrio-httpcli');

// URL 및 파라미터 설정
var url = 'http://api.flickr.com/services/rest/';

var param = {
        method:'flickr.photos.search',
        api_key:'api_key',
        text:'cat',
        format:'rest'
};

client.fetch(url, param, function(err, $, res) {
  if( err) {
    console.log('err : ' + err);
    return;
  }
  // 다운 로드한 결과를 화면에 출력
  console.log($('photos')[0].attribs);
  $('photos').each(function(i, el) {
    console.log(i);
    console.log(el.attribs);
    var farm   = element.attribs.farm;
    var server = element.attribs.server;
    var id     = element.attribs.id;
    var secret = element.attribs.secret;
    // 이미지의 실제 url 구성
    var url = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
  });
});
