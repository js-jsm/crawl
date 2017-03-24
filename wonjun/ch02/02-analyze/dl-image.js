const client = require('cheerio-httpcli');
const request = require('request');
const fs = require('fs');
const savedir = `${__dirname}/img`;
const urlType = require('url');
const url = `https://ko.wikipedia.org/wiki/${encodeURIComponent('개')}`;
const param = {};

if (!fs.existsSync(savedir)) {
  fs.mkdirSync(savedir);
}


client.fetch(url, param, (err, $, res) => {
  if (err) console.log('Error',err);
  $('img').each(function() {
    let src = $(this).attr('src');
    src= urlType.resolve(url, src);

    let fname = urlType.parse(src).pathname;
    fname = `${savedir}/${fname.replace(/[^a-zA-Z0-9\.]+/g, '_')}`;
    request(src).pipe(fs.createWriteStream(fname));
  })
})
