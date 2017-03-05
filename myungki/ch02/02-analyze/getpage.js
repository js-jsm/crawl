const
    client  = require("cheerio-httpcli"),   // 모듈로드
    url     = "http://jpub.tistory.com",    // 다운로드
    param   = {};

client.fetch(url, param, (err, $, res) => {

    // 에러체크
    if (err) {
        console.log("Error:", err); return undefined;
    }

    // 다운로드한 결과를 화면에 출력
    let body = $.html();
    console.log(body);

});
