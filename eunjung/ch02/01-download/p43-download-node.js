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
//    2-1. createWriteStream() 이 실행되는 순간 내용이 없는, savepath 파일명을 가진 파일을 만든다.
var outfile = fs.createWriteStream(savepath);

// 3. 비동기로 URL의 파일 다운로드
// http.get(url, callbackfnc) : URL 에 접속하여 callbackfnc 를 실행
http.get(url, res => {
  // 4. 다운로드한 데이터를 파일에 저장하도록 지정
  //    4-1. outfile 파일명을 가진 파일에 pipe() 함수를 이용하여 내용을 입력한다.
  res.pipe(outfile);
  // 5. 상위 함수의 처리가 완료되었을 때 (끝났을 때) callback 함수가 실행된다.
  res.on('end', () => { // do event binding
    outfile.close();
    console.log('ok');
  })

})
