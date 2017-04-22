const RSS = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';

const SAVE_PATH = 'temperature-data.js';

const client = require('cheerio-httpcli');

const fs = require('fs');

const res = [['날짜', '최고 기온', '최저 기온']];

client.fetch(RSS, {}, function(err, $, response) {

  err && new Error(err);

  $('location:nth-child(1) > data').each(function() {
    const tmEf = $(this).find('tmEf').text();
    tmEf.match('00:00') && res.push([
        tmEf,
        parseInt($(this).find('tmn').text(), 10),
        parseInt($(this).find('tmx').text(), 10),
      ]);
  });

  fs.writeFileSync(SAVE_PATH, `const tempData = ${JSON.stringify(res)}`, 'utf-8');

  console.log('ok');
});
