const RSS = 'http://www.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=108';

const parseString = require('xml2js').parseString;
const request = require('request');

request(RSS, function(err, res, body) {
  if (!err && res.statusCode == 200) {
    analyzeRSS(body);
  }
});

function analyzeRSS(xml) {
  parseString(xml, function(err, obj) {
    if (err) { console.log(err); return; }

    console.log(JSON.stringify(obj));

    const datas = obj.rss.channel[0].item[0].description[0].body[0].location[0].data;
    const city = obj.rss.channel[0].item[0].description[0].body[0].location[0].city;

    for(var i in datas) {
      var data = datas[i];
      console.log(`${city} ${data.tmEf} ${data.wf} ${data.tmn} ~ ${data.tmx}`);
    }
  })
}
