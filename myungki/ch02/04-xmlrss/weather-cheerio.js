// 기상청 기상예보 RSS(cheerio 이용)

// 기상RSS
const RSS = "http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109";

// 모듈로드
const client = require('cheerio-httpcli');

// RSS 다운로드
client.fetch(RSS, {}, (err, $, res) => {
    if (err) { console.log("error"); return undefined; }

    // 필요한 항목을 추출해서 표시
    let city = $('location:nth-child(1) > city').text();

    $('location:nth-child(1) > data').each(function(idx) {
        let tmEf = $(this).find('tmEf').text(),
            wf = $(this).find('wf').text(),
            tmn = $(this).find('tmn').text(),
            tmx = $(this).find('tmx').text();

        console.log(`${city} ${tmEf} ${wf} ${tmn}~${tmx}`);
    })
})
