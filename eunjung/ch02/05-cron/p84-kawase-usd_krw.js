// 정기적으로 파일 다운로드 하기

// 환율 API
var API = 'http://api.aoikujira.com/kawase/get.php?code=USD&format=json';

// 모듈 로드
var request = require('request');
var fs = require('fs');

// 웹 API 요청
request(
    API,
    function(err, response, body) {
        if(err || response.statusCode != 200) {
            console.log(err);
            return;
        }

        // JSON 을 JS 객체로 변환
        var r = JSON.parse(body);
        var krw = r['KRW'];

        // 환율을 파일에 저장(파일명에 날짜 표기)
        var t = new Date();
        var fname =
            'USD_KRW_' + t.getFullYear() +
            '-' + (t.getMonth() + 1) +
            '-' + t.getDay() + '.txt';
        var text = 'lusd=' + krw + 'krw';
        console.log(text);
        fs.writeFile(fname, text);
    }
);
// 실행결과
//  lusd=1152.32057krw  // 출력
//  USD_KRW_2017-3-6.txt // 파일생성
