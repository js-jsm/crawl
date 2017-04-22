const client = require('cheerio-httpcli');
const fs = require('fs');

const RSS = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';
const SAVE_PATH = 'temperature-data.js';

client.fetch(RSS, {}, (err, $) => {
    if(err) {
        console.error('error');
        return;
    }

    const result = [];
    $('location:nth-child(1) > data').each((_, item) => {
        const $item = $(item);
        const tmEf = $item.find('tmEf').text();
        if(tmEf.match('00:00')) {
            const [
                tmn,
                tmx
            ] = [
                $item.find('tmn').text(),
                $item.find('tmx').text()
            ];
            result.push([tmEf, parseInt(tmn, 10), parseInt(tmx, 10)]);
            console.log(tmEf, tmn, tmx);
        }
    });
    result.unshift(['날짜', '최저기온', '최고기온']);
    const src = `const tempData = ${JSON.stringify(result)};`;
    fs.writeFileSync(SAVE_PATH, src, 'utf-8');
    console.log('ok!');
});
