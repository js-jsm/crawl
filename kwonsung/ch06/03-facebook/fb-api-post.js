const FB = require('fb');
const fb = require('../config.json').facebook;

FB.setAccessToken(fb.access_token);

const message = '간장냥의 자동 포스트 등록!';

FB.api('me/feed', 'post', {message}, res => {
  if(!res) return console.log('error');
  console.log(res);
});