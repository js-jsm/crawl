// 기상청 기상예보 RSS
var RSS = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';

// 모듈 로드
var parseString = require('xml2js').parseString;
var request = require('request');

// RSS 다운로드
request(
    RSS,
    function(err, response, body) {
        if(!err && response.statusCode == 200) {    // 정상적으로 데이터를 취득한 경우를 의미한다.
            analyzeRSS(body);
        }
    }
);

// RSS 해석
function analyzeRSS(xml) {
    // xml 을 자바스크립트 오브젝트로 변환
    parseString(
        xml,
        function(err, obj) {
            if(err) {
                console.log(err);
                return;
            }

            // 기상예보 정보 출력
            var datas = obj.rss.channel[0].item[0].description[0].body[0].location[0].data;
            var city  = obj.rss.channel[0].item[0].description[0].body[0].location[0].city;

            for(var i in datas) {
                var data = datas[i];
                console.log(city + ' ' + data.tmEf + ' ' + data.wf + ' ' + data.tmn + '~' + data.tmx);
            }

            // 자바스크립트 객체의 내용을 보고 싶다면 JSON.stringify() 를 사용하여 출력하면 된다.
        }
    );
}
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
