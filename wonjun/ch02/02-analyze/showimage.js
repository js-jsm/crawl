const client = require('cheerio-httpcli');
const urlType = require('url');
const url = `https://ko.wikipedia.org/wiki/${encodeURIComponent('개')}`;
const param = {};

client.fetch(url, param, (err, $, res) => {
  if (err) console.log('Error',err);
  $('img').each(function() {
    let src = $(this).attr('src');
    src= urlType.resolve(url, src);
    console.log(src);
  })
})
