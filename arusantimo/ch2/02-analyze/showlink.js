const client = require('cheerio-httpcli');
const url = "http://jpub.tistory.com";
const param = {};
client.fetch(url, param, (err, $, res) => {
  if (err) {
    console.log("error");
    return;
  }
  $("a").each((idx) => {
    const text = $(this).text();
    const href = $(this).attr('href');
    console.log(text+":"+href);
  });
});