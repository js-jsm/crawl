//url에 있는 파일을 savePath에 다운로드한다.

//다운로드할 URL을 지정
var url = 'http://jpub.tistory.com/';

//저장할 위치를 지정
var savePath = 'test.html';

//node_modules 에 있는 모듈을 가져온다
//사용자 모듈 정의

var http = require('http');
//file system 관리해주는 모듈
var fs = require('fs');

//출력 지정  outfile = WriteStream
//new file과 같은 상태
var outfile = fs.createWriteStream(savePath);

//비동기로 url의 파일 다운로드
http.get(url, function(res) {
  // pipe -> new 한 빈 파일에  내용을 넣어줌(?)
  res.pipe(outfile);
  res.on('end', function() {
    outfile.close();
    console.log('ok');
  });
});
