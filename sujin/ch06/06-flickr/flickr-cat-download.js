// 플리커에서 사진 검색 및 다운로드

// 모듈 로드
var client  = require('cherrio-httpcli');
var fs      = require('fs');
var request = require('request');

// URL 및 파라미터 설정
var url = 'https://api.flickr.com/services/rest/';

var param = {
        method:'flickr.photos.search',
        api_key:'api_key',
        text:'cat',
        format:'rest',
        license:4 // creative commons by
};

// 다운 로드 디렉토리 생성
var PHOTO_DIR = __dirname + '/photo';
if(!fs.existSync(PHOTO_DIR)) fs.mkdirSync(PHOTO_DIR);

client.fetch(url, param, function(err, $, res)  {
  if(err) {
    console.log('err : ' + err);
    return;
  }
  // 다운로드한 결과를 화면에 출력
  console.log($('photos')[0].attribs);
  $('photos').each(function(index, element) {
    // console.log(index);
    // console.log(element.attribs);
    var farm   = element.attribs.farm;
    var server = element.attribs.server;
    var id     = element.attribs.id;
    var secret = element.attribs.secret;
    // 이미지의 실제 url 구성
    var url = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
    console.log(url);

    var fname = id + '_' + secret + '.jpg';
    request(url).pipe(fs.createWriteStream(fname)); // 이미지 파일 다운로드

  });
});
