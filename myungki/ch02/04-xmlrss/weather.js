// 기상청 기상예보 RSS
const RSS = "http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109";

// 모듈로드
const
    parseString = require('xml2js').parseString,
    request = require('request');

request(RSS, (err, res, body) => {
    if (!err && res.statusCode == 200) {
        analyzeRSS(body);
    }
});

// RSS 해석
const analyzeRSS = xml => {
    // xml 을 js 로
    parseString(xml, (err, obj) => {
        if (err) { console.log(err); return undefined; }

        // 기상예보 정보 출력
        console.log(JSON.stringify(obj));
        const
            datas = obj.rss.channel[0].item[0].description[0].body[0].location[0].data,
            city = obj.rss.channel[0].item[0].description[0].body[0].location[0].city;

        for (let i in datas) {
            let data = datas[i];
            console.log(`${city} ${data.tmEf} ${data.wf} ${data.tmn} ${data.tmx}`);
        }

    })
}
