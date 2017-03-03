// <이미지 파일 추출>
//  - <img> 태그를 추출하여 src 속성에 지정된 이미지 파일의 경로들을 출력해주는 프로그램

// 모듈
var client = require('cheerio-httpcli');
var urlType = require('url');

// 다운로드
var url = 'https://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지');
var param = {};


// cheerio-httpcli fetch()
//  - url 에서 지정한 WEB페이지를 get 메소드로 취득하고
//    문자 코드의 변환 및 HTML파싱을 수행, callback 함수에 반환합니다.
client.fetch(url, param, function(err, $, res) {
  console.log('eunjung > url : ' + url);

  if(err) {
    console.log('error');
    return;
  }

  // 링크를 추출하여 표시
  $('img').each(function(idx) {
    var src = $(this).attr('src');
    console.log('before resolve() src : ' + src);
    src = urlType.resolve(url, src);
    console.log('after  resolve() src : ' + src);
  });
});
