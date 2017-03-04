const client = require('cheerio-httpcli');
const request = require('request');
const fs = require('fs');
const urlType = require('url');

const savedir = `${__dirname}/img`;
if(!fs.existsSync(savedir)) fs.mkdirSync(savedir);

const url = `https://ko.wikipedia.org/wiki/${encodeURIComponent('강아지')}`;
const param = {};

client.fetch(url, param, (err, $) => {
  if(err) return console.log(`Error: ${err}`);

  $('img').each(function() {
    let src, fname;
    src = $(this).attr('src');
    src = urlType.resolve(url, src);
    fname = urlType.parse(src).pathname;
    console.log(fname);
    fname = `${savedir}/${fname.replace(/[^a-zA-Z\d.]+/g, '_')}`;
    request(src).pipe(fs.createWriteStream(fname));
  });
});
