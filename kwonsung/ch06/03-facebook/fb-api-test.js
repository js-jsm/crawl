const FB = require('fb');
const fb = require('../config.json').facebook;

FB.setAccessToken(fb.access_token);
FB.api('me/feed', 'get', {}, feed => {
  if(!feed) return console.log('error');
  const {data} = feed;
  for(const key in data) {
    const row = data[key];
    console.log(row);
    console.log('-------------------');
  }
});