const
    client  = require("cheerio-httpcli"),   // 모듈로드
    urlType = require("url"),
    url     = `https://ko.wikipedia.org/wiki/${encodeURIComponent("강아지")}`,    // URL
    param   = {};                           // Parameter

// 다운로드
client.fetch(url, param, (err, $, res) => {

    // 에러체크
    if (err) {
        console.log(err);
        return undefined;
    }

    // 링크를 추출하여 표시
    $("img").each(function(idx) {

        let src = $(this).attr('src');
        src = urlType.resolve(url, src);

        console.log(src);

    });

});
