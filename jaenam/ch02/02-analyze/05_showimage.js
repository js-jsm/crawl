const client = require('cheerio-httpcli');
const urlType = require('url');

const url = `https://ko.wikipedia.org/wiki/${encodeURIComponent('강아지')}`;

client.fetch(url, {}, (err, $, res) => {
  if(err) { console.log('error'); return; }
  const $img = $('img');
  $img.each(idx => {
    console.log(urlType.resolve(url, $img.eq(idx).attr('src')));
  });
});
