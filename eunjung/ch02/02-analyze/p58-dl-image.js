// <링크된 이미지를 전부 다운로드>
// 모듈
var client = require('cheerio-httpcli'),
    urlType = require('url'),
    request = require('request'),
    fs = require('fs'),
    // __dirname 현재 경로의 절대 경로를 리턴 (파일인지? node 인지?)
    savedir = __dirname + '/img', // 디렉토리
    url = 'https://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지'), // url
    param = {};

// 저장할 디렉토리가 없으면 생성
// fs.existsSync() 함수는 파일이나 디렉토리의 존재 여부를 확인하는 함수이다.
if(!fs.existsSync(savedir)) {
    fs.mkdirSync(savedir);  // 디렉토리 생성
    // fs.mkdir() : 파일이나 디렉토리의 작성이 완료된 시점에서 두번째 인자로 지정한 콜백 함수가 호출된다.
    // fs.mkdirSync() : 디렉토리의 작성이 완료될 때까지 스크립트의 흐름을 멈추고 대기한다.
}

// HTML 파일 획득
client.fetch(
    url,
    param,
    function(err, $, res) {
        if(err) {
            console.log('error');
            return;
        }

        // img 링크 추출하여 각 링크에 대해 함수 수행
        $('img').each(
            function(idx) {
                var src = $(this).attr('src');
                // 상대 경로를 절대 경로로 변환
                src = urlType.resolve(url, src);
                // 저장할 파일 경로 및 이름 결정
                var fname = urlType.parse(src).pathname;
                // 추출한 경로명에서 알파벳과 숫자, 도트 이외의 문자를 '_'로 변환
                fname = savedir + '/' + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');
                // 다운로드
                request(src).pipe(fs.createWriteStream(fname));
            }
        );
    }
);
