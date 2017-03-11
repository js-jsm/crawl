// cheerio-httpcli 를 이용하여 XML/RSS 파싱
var RSS = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';
var client = require('cheerio-httpcli');

client.fetch(
    RSS,
    {},
    function(err, $, res) {
        if(err) {
            console.log(err);
            return;
        }

        // cheerio-httpcli 를 이용하면 CSS 선택자를 사용하여 원하는 부분의 정보를 추출할 수 있다.
        var city = $('location:nth-child(1) > city').text();
        $('location:nth-child(1) > data').each(
            function(idx) {
                var tmEf = $(this).find('tmEf').text();
                var wf = $(this).find('wf').text();
                var tmn = $(this).find('tmn').text();
                var tmx = $(this).find('tmx').text();

                console.log(city + ' ' + tmEf + ' ' + wf + ' ' + tmn + '~' + tmx);
            }
        );
    }
);

// 실행결과
//  서울 2017-03-07 00:00 구름조금 -5~5
//  서울 2017-03-07 12:00 구름조금 -5~5
//  서울 2017-03-08 00:00 구름조금 -3~6
//  서울 2017-03-08 12:00 구름조금 -3~6
//  서울 2017-03-09 00:00 구름조금 -2~9
//  서울 2017-03-09 12:00 구름조금 -2~9
//  서울 2017-03-10 00:00 맑음 0~10
//  서울 2017-03-10 12:00 맑음 0~10
//  서울 2017-03-11 00:00 구름조금 1~11
//  서울 2017-03-11 12:00 구름조금 1~11
//  서울 2017-03-12 00:00 구름많음 2~12
//  서울 2017-03-13 00:00 구름조금 2~13
//  서울 2017-03-14 00:00 구름조금 2~12
