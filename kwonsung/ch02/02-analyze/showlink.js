const client = require('cheerio-httpcli');

const url = 'http://jpub.tistory.com';
const param = {};

client.fetch(url, param, (err, $) => {
  if(err) return console.log(`Error: ${err}`);

  $('a').each(function() {
    const text = $(this).text();
    const href = $(this).attr('href');
    console.log(`${text}: ${href}`);
  });
});
