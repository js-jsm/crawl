const client = require('cheerio-httpcli');
const URL = require('url');
const url = "https://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
const param = {};
client.fetch(url, param, (err, $, res) => {
  if (err) {
    console.error("error");
    return;
  }
  $("img").each((idx) => {
    const src = $(this).attr('src');
    src = URL.resolve(url, src);
    console.log(src);
  });
});

