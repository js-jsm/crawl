//모듈 로드
//node_modules에서 cheerio-httpcli과 url 모듈을 가지고와서 변수에 저장을 한다.
var client = require('cheerio-httpcli');
var urlType = require('url');

//다운로드
// url : unique resource location, uri : unique resource identified
var url = 'https://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지');
var param = {};

//client 안에 있는 fetch 함수를 실행 시키는데 매개변수로는 url, param, cbf를 가지고 있음
//
client.fetch(url, param, function(err, $) {
    if(err) {
      console.log('error : ' + err);
      return;
    }
    //img태그를 가져와라.
    $('img').each(function(idx) {
    var src = $(this).attr('src'); //var src = $(this); --> img태그 나옴 , attr ->태그 속성 값 가져오기
    //--> //upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/30px-Commons-logo.svg.png: src
    src = urlType.resolve(url, src);
                          //기본url, 상대 url
            //urlType에서 resolve 호출 한다.
            //상대경로를 절대 경로로 바꿔준다.
      console.log(src + ': src');
      //http://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/30px-Commons-logo.svg.png: src
    });
});
