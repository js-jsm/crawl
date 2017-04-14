const Twit = require('twit');
const {consumer_key, consumer_secret, access_token, access_token_secret} = require('../config.json').twitter;

const T = new Twit({
  consumer_key, consumer_secret, access_token, access_token_secret
});

const stream = T.stream('statuses/filter', {track: 'JavaScript'});

stream.on('tweet', tw => {
  const {text} = tw;
  const {name} = tw.user;
  console.log(`${name} > ${text}`);
});