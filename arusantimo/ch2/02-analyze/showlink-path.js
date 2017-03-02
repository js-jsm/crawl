const client = require('cheerio-httpcli');
const urlType = require('url');
const param = {};
client.fetch("http://jpub.tistory.com", param, (err, $, res) => {
  if (err) {
    console.error("error");
    return;
  }
  $("a").each((idx) => {
    const text = $(this).text();
    const href = $(this).attr('href');
    if (!href) {
      return
    };
    const href2 = urlType.resolve(url, href);
    console.log(text + " 는 " + href);
    console.log(" > " + href2 + "\n");
  });
});