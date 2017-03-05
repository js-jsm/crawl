const
    client  = require("cheerio-httpcli"),   // 모듈로드
    request = require("request"),
    fs      = require("fs"),
    urlType = require("url"),
    savedir = `${__dirname}/img`;

// 저장할 디렉토리가 없으면 생성
if (!fs.existsSync(savedir)) {
    fs.mkdirSync(savedir);
}

// URL 지정
const
    url = `https://ko.wikipedia.org/wiki/${encodeURIComponent("고양이")}`,
    param = {};

// HTML 파일 획득
client.fetch(url, param, (err, $, res) => {

    if (err) { console.log("error"); return undefined; }

    // img 링크 추출하여 각 링크에 대해 함수 수행
    $('img').each(function(idx){

        let src = $(this).attr('src');

        // 상대경로를 절대경로로 변환
        src = urlType.resolve(url, src);

        //저장파일 이름 결정
        let fname = urlType.parse(src).pathname;
        fname = `${savedir}/${fname.replace(/[^a-zA-Z0-9\.]+/g, '_')}`;

        // 다운로드
        request(src).pipe(fs.createWriteStream(fname));

    })

})
