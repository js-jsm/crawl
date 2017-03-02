const client = require('cheerio-httpcli');
const request = require('request');
const fs = require('fs');
const urlType = require('url');

const savedir = `${__dirname}/img`;
if(!fs.existsSync(savedir)) {
  fs.mkdirSync(savedir);
}

const url = `https://ko.wikipedia.org/wiki/${encodeURIComponent('강아지')}`;

client.fetch(url, {}, (err, $, res) => {
  if(err) { console.error('error'); return; }
  const $img = $('img');
  $img.each(idx => {
    const src = urlType.resolve(url, $img.eq(idx).attr('src'));
    const fname = `${savedir}/${
      urlType.parse(src).pathname.replace(/[^a-zA-Z0-9\.]+/g, '_')
    }`;
    request(src).pipe(fs.createWriteStream(fname));
  });
});
