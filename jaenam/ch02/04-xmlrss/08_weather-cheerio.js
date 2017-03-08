const rss = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';
const client = require('cheerio-httpcli');

client.fetch(rss, {}, (err, $, res) => {
  if(err) { console.error(err); return; }
  const loc = $('location').eq(0);
  const city = loc.children('city').text();
  loc.find('data').each((i, item) => {
    console.log(
      `${city}\t ${$(item).find('tmEf').text()}\t ${$(item).find('wf').text()}\t ${$(item).find('tmn').text()}\t ${$(item).find('tmx').text()}`
    );
  });
});

const analyzeRss = xml => {
  parseString(xml, (err, obj) => {
    if(err) { console.error(err); return; }
    const {
      data,
      city
    } = obj.rss.channel[0].item[0].description[0].body[0].location[0];
    data.forEach(({tmEf, wf, tmn, tmx}) => {
      console.log(`${city}\t ${tmEf}\t ${wf}\t ${tmn}\t ${tmx}`);
    });
  });
}
