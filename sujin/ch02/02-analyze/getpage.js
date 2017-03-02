//node_modules에서 cheerio-httpcli 모듈을 가져와 client에 저장.
var client = require('cheerio-httpcli');

var url = 'http://jpub.com';

var param = {};

// client안에 있는 fetch함수 실행, ESS에 추가된 함수이고 ajax로 작동된다.
// url, param, cbf를 받아 --> 다시물어보기
// url, param을 request로 받아 response받아서 fucntion실행?
client.fetch(url, param, function (err, $) {
  //만약 err가 있으면 error메세지
  if (err) {
    console.log('error : ' + err);
    return; // 여기서 function이 끝이난다.
  }
  //error가 없다면
  // '$' -> jQuery와 비슷하게 요소를 획득할 수 있는 함수.
  // $안에 있는 html함수 실행 -> 변수로 지정한 html에 저장.
  var html = $.html();
  console.log($ + ': $');
  console.log(html);
});
