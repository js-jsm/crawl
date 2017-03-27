const fs = require('fs');
const cheerio = require('cheerio');
const Iconv = require('iconv').Iconv;
const euckr_utf8 = new Iconv('euc-kr', 'utf-8');
let xml = fs.readFileSync('./news_00.xml');
xml = euckr_utf8.convert(xml);
const $ = cheerio.load(xml, {xmlMode: true});
$('item').each((idx, elem) => {
  const title = $(elem).children('title').text();
  const desc = $(elem).children('description').text();

  console.log(title);
  console.log(desc);
  console.log('------------------------');
});