// url에 있는 파일을 savepath에 다운로드 한다.

const
    url         = "http://jpub.tistory.com",       // 다운로드 할 URL 지정
    savepath    = "test.html",                     // 저장 할 위치 지정
    http        = require('http'),                 // 사용자 모듈 정의
    fs          = require('fs'),
    outfile     = fs.createWriteStream(savepath);  // 출력지정

// 비동기로 URL의 파일 다운로드
http.get(url, res => {
        res.pipe(outfile);
        res.on('end', _ => {
            outfile.close();
            console.log('ok');
        })
})
