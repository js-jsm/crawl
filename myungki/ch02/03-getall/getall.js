// 링크를 분석해서 다운로드

// 모듈 로드
const
    client      = require('cheerio-httpcli'),
    request     = require('request'),
    urlType     = require('url'),
    fs          = require('fs'),
    path        = require('path');

// 공통설정

// 링크 탐색 단계 지정
const LINK_LEVEL = 3;

// 기준 URL 페이지
const
    TARGET_URL = "http://nodejs.jp/nodejs.org_ja/docs/v0.10/api",
    list = {};

// 저장할 디텍토리 존재 유무 확인
const checkSaveDir = fname => {
    let dir = path.dirname(fname);

    // 디렉토리를 제귀적으로 생성
    let dirlist = dir.split('/'),
        p = '',
        i;

    for (i in dirlist) {
        p += dirlist[i] + '/';
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
}

// 지정 URL을 최대 LEVEL 단계까지 다운로드
const downloadRec = (url, level) => {

    // 최대 level 확인
    if (level >= LINK_LEVEL) return undefined;

    // 이미 다운받은 사이트는 무시
    if (list[url]) return undefined;
    list[url] = true;

    // 외부페이지는 무시
    let us = TARGET_URL.split('/');
    us.pop();
    let base = us.join('/');
    if (url.indexOf(base) < 0) return undefined;

    // HTML을 취득
    client.fetch(url, {}, (err, $, res) => {

        // 링크된 페이지를 취득
        $('a').each(function(){

            // a 태그의 링크를 획득
            let href = $(this).attr('href');
            if (!href) return undefined;

            // 상대경로를 절대경로로 변환
            href = urlType.resolve(url, href);

            // 해쉬태그 무시
            href = href. replace(/\#.+$/, "");
            downloadRec(href, level + 1);

        });

        // 페이지 저장
        if (url.substr(url.length-1, 1) == '/') {
            url += "index.html";
        }
        let savepath = url.split('/').slice(2).join('/');
        checkSaveDir(savepath);
        console.log(savepath);
        fs.writeFileSync(savepath, $.html());

    });

};

downloadRec(TARGET_URL, 0);
