// 03 사이트를 통쨰로 다운로드

//  <링크를 따라다니며 다운로드>

// -모듈로드-
var client  = require('cheerio-httpcli'),
    urlType = require('url'),
    request = require('request'),
    fs      = require('fs'),
    path    = require('path');

// -공통설정-
var LINK_LEVEL = 3, // 링크 탐색 단계 지정
    TARGET_URL = 'http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/', // 기준 URL
    list       = {};

// -지정 URL을 최대 level 단계까지 다운로드- : 주 처리 함수
function downloadRec(url, level) {
    // 최대 level 확인
    if(level >= LINK_LEVEL) {
        return; // 방문 레벨 검사. 최대 레벨을 벗어난 경우 함수를 벗어난다.
    }

    // 이미 다운받은 사이트는 무시
    if(list[url]) {
        return; // 이미 다운로드한 URL 인 경우 함수를 벗어난다.
    }

    list[url] = true;

    // 외부 페이지는 무시
    var us = TARGET_URL.split('/');
    us.pop();

    var base = us.join('/');
    if(url.indexOf(base) < 0) {
        return;
    }

    // HTML을 취득
    client.fetch( // URL 의 HTML 을 취득한다.
        url,
        {},
        function(err, $, res) {
            // 링크된 페이지를 취득
            $('a').each( // HTML 의 a 태그를 전체 순회
                function(idx) {
                    // <a> 태그의 링크를 획득
                    var href = $(this).attr('href');
                    if(!href) {
                        return;
                    }

                    // 획득한 링크의 상대 경로를 절대 경로로 변환
                    href = urlType.resolve(url, href);

                    // '#' 이후를 무시(a.html#aa 와 a.html#bb 는 같다)
                    href = href.replace(/\#.+$/, ''); // 말미의 # 를 제거
                    console.log('eunjung : href = ' + href);
                    // href 를 매개변수로 넘겨줌으로써 링크를 타고들어가는 효과!
                    downloadRec(href, level + 1); // 재귀처리로 링크를 다운로드 하고 있다.

                }
            );

            // 페이지 저장(파일명 지정)
            if(url.substr(url.length - 1, 1) == '/') {
                url += 'index.html';
            }

            var savepath = url.split('/').slice(2).join('/');

            checkSaveDir(savepath);
            console.log(savepath);
            fs.writeFileSync(savepath, $.html());
        }
    );
}

// 지정할 디렉토리 존재 유무 확인
function checkSaveDir(fname) {
    var dir = path.dirname(fname),  // 디렉토리 부분만 검출
        dirlist = dir.split('/'),   // 디렉토리를 재귀적으로 생성
        p = '';

    for(var i in dirlist) {
        p += dirlist[i] + '/';
        if(!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
}

// -메인처리-
downloadRec(TARGET_URL, 0);
