// 다운로드
donwload(
  'http://jpub.tistory.com/539',
  'spring.html',
  function() {
    console.log('ok, spring');
  }
);

donwload(
  'http://jpub.tistory.com/537',
  'angular.html',
  function() {
    console.log('ok, angular');
  }
);

  //url의 파일을 savepath에 다운로드 하는 함수
  function donwload(url, savepath, callback) {
    //http모듈을 node_modules에서 가지고와 변수로 지정한 http에다가 가져온 http를 저장을 시킨다.
    var http = require('http');
    var fs = require('fs');
    // savepath가 문자열 이니깐... 문자열을 fs.createWriteStream함수 매개변수 안에 넣고
    // 문자열 이름 (ex.spring.html, angular.html) 으로 파일이름이 생성이 됨.
    // 안에 파일은 빈껍질 임.
    // 그것을 변수로 지정을 해준 outfile에 저장을 한다. => 빈껍질.
    var outfile = fs.createWriteStream(savepath);

    /*
    */

    // http안에 있는 get함수를 실행을 시키는데
    // url을 request를 받고 response를 받아 cbf를 실행 시킨다
    var req = http.get(url, function(res) {
      // response한 res를 outfile에 넣는다.(연결한다?) => html작성을 시작한다.
      res.pipe(outfile);
      //작성이 끝나고 하면 다시 cbf을 실행한다
      res.on('end', function() {
        outfile.close();
        callback();
      });
    });
  }
