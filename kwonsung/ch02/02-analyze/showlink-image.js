const client = require('cheerio-httpcli');
const urlType = require('url');

const url = 'http://jpub.tistory.com';
const param = {};

client.fetch(url, param, (err, $) => {
  if(err) return console.log(`Error: ${err}`);

  $('a').each(function() {
    const text = $(this).text();
    let href = $(this).attr('href');
    if(!href) return;
    let href2 = urlType.resolve(url, href);
    console.log(`${text}: ${href}`);
    console.log(`${text}: ${href2}`);
  });
});
