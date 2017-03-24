const client = require('cheerio-httpcli');
const urlType = require('url');
const url = 'http://jpub.tistory.com';
const param = {};

client.fetch(url, param, (err, $, res) => {
  if (err) console.log('Error',err);
  $('a').each(function() {
    const text = $(this).text();
    const href = $(this).attr('href');
    if (!href) return;
    const href2 = urlType.resolve(url, href);
    console.log(`${text}:${href}`);
    console.log(`${text}:${href2}`);
  })
})
