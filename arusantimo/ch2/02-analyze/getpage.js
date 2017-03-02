const client = require('cheerio-httpcli');
const param = {};
client.fetch("http://jpub.tistory.com", param, (err, $, res) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  const body = $.html();
  console.log(body);
});
