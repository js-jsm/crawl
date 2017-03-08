const client = require('cheerio-httpcli');
const urlType = require('url');

const url = `https://ko.wikipedia.org/wiki/${encodeURIComponent('강아지')}`;
const param = {};

client.fetch(url, param, (err, $) => {
  if(err) return console.log(`Error: ${err}`);

  $('img').each(function() {
    let src = $(this).attr('src');
    src = urlType.resolve(url, src);
    console.log(src);
  });
});
