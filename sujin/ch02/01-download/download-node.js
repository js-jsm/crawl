// url에 있는 파일을 savepath에 다운로드한다.

// 다운 로드할 URL을 지정
var url = "http://jpub.tistory.com/";
// 저장할 위치를 지정
var savepath = "test.html";

// 사용 모듈 정의
// npm install -> package.json ->npm down 받아서
// -> node_modules에 저장되어 있는 모듈들을 가져오는것.
// require() 함수 실행시켜 http모듈을 받아 http에 저장
var http = require('http'); //HTTP 모듈

// createWriteStream을 실행 시켜
// 어디에 저장할건지 savepath(경로 설정)
// fs --> filesystem
var fs = require('fs'); // 파일 처리 관련 모듈

// 출력 지정
// filesytem에 있는
var outfile = fs.createWriteStream(savepath);

//비동기로 URL의 파일 다운로드
// get() 함수 실행 - ajax함수

// get함수가 실행이 될때
// res http문자열
// pipe로 outfile사용
//
http.get(url, function(res) {
      // pipe -> 입력을 하면 출력이 될꺼다 라는 함수..(출력 -> 입력 (X))
      res.pipe(outfile); // ==> new File을 만드는 과정
      res.on('end', function() { //'end' => 파일이 끝나면 function실행
          outfile.close();
          console.log('성공했다 캬캬');
      });
});
