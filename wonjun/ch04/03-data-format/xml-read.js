const fs = require('fs');

const iconv = require('iconv-lite');

const cheerio = require('cheerio');

const xml = fs.readFileSync('mbcNews.xml', 'binary');

const $ = cheerio.load(xml, { xmlMode: true });

$('item').each(function(i, el) {
  const title = iconv.decode($(this).children('title').text(), 'euc-kr');
  const desc = iconv.decode($(this).children('description').text(), 'euc-kr');
  console.log(title);
  console.log(desc);
  console.log('--------------------');
});
