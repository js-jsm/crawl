//url에 있는 파일을 savePath에 다운로드한다.

//다운로드할 URL을 지정
var url = 'http://jpub.tistory.com/';
//저장할 위치를 지정
var savePath = 'test.html';

//node_modules 에 있는 모듈을 가져온다
//사용자 모듈 정의
var http = require('http');
var fs = require('fs');
var outfile = fs.createWriteStream(savePath);

http.get(url, function(res) {
  res.pipe(outfile);
  res.on('end', function() {
    outfile.close();
    console.log('ok');
  });
});
