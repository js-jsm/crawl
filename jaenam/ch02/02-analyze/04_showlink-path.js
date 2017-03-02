const client = require('cheerio-httpcli');
const urlType = require('url');
const url = 'http://jpub.tistory.com';
const param = {};

client.fetch(url, param, (err, $, res) => {
  if(err) { console.error('error'); return; }
  const $a = $('a');
  $a.each(idx => {
    const $t = $a.eq(idx);
    const text = $t.text();
    const href = $t.attr('href');
    if(!href) return;
    const href2 = urlType.resolve(url, href);
    console.log(`text : ${href}`);
    console.log(` => ${href2}\n`);
  });
});
