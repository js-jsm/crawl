const
    client  = require("cheerio-httpcli"),   // 모듈로드
    url     = "http://jpub.tistory.com",    // 다운로드
    param   = {};

client.fetch(url, param, (err, $, res) => {

    // 에러체크
    if (err) {
        console.log(err);
        return undefined;
    }

    // 링크를 추출하여 표시
    $("a").each(function(idx) {

        let text = $(this).text(),
            href = $(this).attr('href');

        console.log(`${text} : ${href}`);

    });

});
