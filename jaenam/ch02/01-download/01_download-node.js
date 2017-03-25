// url에 있는 파일을 savepath에 다운로드한다.
// yes
// 다운로드할 url 지정
const url = 'http://jpub.tistory.com';

// 저장할 위치 지정
const savepath = 'test.html';

// 사용 모듈 정의
const http = require('http');
const fs = require('fs');

// 출력 지정
const outfile = fs.createWriteStream(savepath);

// 비동기로 url의 파일 다운로드
http.get(url, res => {
    res.pipe(outfile);
    res.on('end', () => {
        outfile.close();
        console.log('ok');
    });
});
