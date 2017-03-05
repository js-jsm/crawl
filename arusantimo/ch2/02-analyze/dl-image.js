const client = require('cheerio-httpcli');
const request = require('request');
const fs = require('fs');
const URL = require('url');
const savedir = __dirname + "/img";
if (!fs.existsSync(savedir)) {
  fs.mkdirSync(savedir);
}
const url = "https://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
const param = {};
client.fetch(url, param, (err, $, res) => {
  if (err) {
    console.log("error");
    return;
  }
  $("img").each((idx) => {
    const src = $(this).attr('src');
    src = URL.resolve(url, src);
    const fname = URL.parse(src).pathname;
    fname = savedir + "/" + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');
    request(src).pipe(fs.createWriteStream(fname));
  });
});

