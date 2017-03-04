const RSS = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';

const parseString = require('xml2js').parseString;
const Request = require('request');

const analyzeRSS = xml => {
  parseString(xml, (err, obj) => {
    if(err) return console.log(err);

    console.log(JSON.stringify(obj, null, '\t'));
    const datas = obj.rss.channel[0].item[0].description[0].body[0].location[0].data;
    const city = obj.rss.channel[0].item[0].description[0].body[0].location[0].city;

    for(const key in datas) {
      const data = datas[key];
      console.log(`${city} ${data.tmEf} ${data.wf} ${data.tmn}~${data.tmx}`);
    }
  });
};

Request(RSS, (err, res, body) => {
  if(!err && res.statusCode === 200) {
    analyzeRSS(body);
  }
});
