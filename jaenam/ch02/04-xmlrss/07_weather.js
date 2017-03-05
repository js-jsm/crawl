const rss = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';
const { parseString } = require('xml2js');
const request = require('request');

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

request(rss, (err, res, body) => {
  if(!err && res.statusCode === 200) analyzeRss(body);
});
