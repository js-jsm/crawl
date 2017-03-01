const client = require('cheerio-httpcli');

const url = 'http://jpub.tistory.com';
const param = {};

client.fetch(url, param, (err, $) => {
  if(err) return console.log(`Error: ${err}`);

  const body = $.html();
  console.log(body);
});
