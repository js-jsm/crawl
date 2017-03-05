const
    client  = require("cheerio-httpcli"),   // 모듈로드
    urlType = require("url"),
    url     = "http://jpub.tistory.com",    // URL
    param   = {};                           // Parameter

// 다운로드
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

        if (!href) return undefined;

        // 상대경로를 절대경로로 변환
        let href2 = urlType.resolve(url, href);

        // 결과를 표시
        console.log(`${text} : ${href}`);
        console.log(`  => ${href2}`);

    });

});
