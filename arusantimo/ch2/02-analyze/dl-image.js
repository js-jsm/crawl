const client = require('cheerio-httpcli');
const request = require('request');
const fs = require('fs');
const URL = require('url');
const savedir = __dirname + "/img";
if (!fs.existsSync(savedir)) { //폴더 없을시 생성 시켜준다. 아래코드에 영향을 주기 때문에 동기적으로 처리한다.
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

