console.log('start the node.');

// url에 있는 파일을 savepath에 다운로드한다.

// 다운로드할 URL을 지정
var url = 'http://jpub.tistory.com/';

// 저장할 위치를 지정
var savepath = 'test.html';

// 1. 사용 모듈 정의
var http = require('http'); // http 모듈
var fs = require('fs');     // 파일 처리 관련 모듈

// 2. 출력 지정
var outfile = fs.createWriteStream(savepath);

// 3. 비동기로 URL의 파일 다운로드
http.get(url, res => {
  // 4.
  res.pipe(outfile);
  // 5.
  res.on('end', () => { // do event binding
    outfile.close();
    console.log('ok');
  })

})
