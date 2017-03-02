const request     = require('request'),
      xml2js      = require('xml2js'),
      parseString = xml2js.parseString,
      RSS         = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';

const analyzeRSS = xml => {

    parseString(xml, (err, obj) => {

        if(err)
            return;

        const datas = obj.rss.channel[0].item[0].description[0].body[0].location[0].data;


        for(const { tmEf, wf, tmn, tmx } of datas)
            console.log(`city ${tmEf} ${wf} ${tmn} ${tmx}`);

    });

};

request(RSS, (err, res, body) => {
    if(!err && res.statusCode == 200)
        analyzeRSS(body);
});