// 페이스북에 포스트 for Node.js

// 모듈 로드
var FB = require('fb');
FB.setAccecssToken('YOUR_ACCESS_TOKEN');

// 임의의 메시지를 포스트
var msg = 'API를 사용한 Posting';
FB.api('me/feed','post',{message:msg}, function(res) {
  if(!res) {
    console.log('error');
    return;
  }
  console.log(res);
});
