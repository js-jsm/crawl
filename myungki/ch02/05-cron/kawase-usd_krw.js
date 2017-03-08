// 환율 정보 취득

// 환율 API URL
const API = "http://api.aoikujira.com/kawase/get.php?code=USD&format=json";

// 모듈 로드
const
    request = require('request'),
    fs = require('fs');

// 웹 API요청
request(API, (err, res, body) => {
    // http 에러체크
    if (err || res.statusCode != 200) {
        console.log("ERROR", err);
        return undefined;
    }

    // JSON을 JS 객체로
    let r = JSON.parse(body),
        krw = r.KRW;

    // 환율을 파일에 저장 (파일명에 날짜 포함)
    let t =  new Date(),
        fname = `USD_KRW_${t.getFullYear()}-${t.getMonth()+1}-${t.getDay()}.txt`,
        text = `1usd = ${krw}krw`;

    console.log(text);
    fs.writeFile(fname, text);
})
