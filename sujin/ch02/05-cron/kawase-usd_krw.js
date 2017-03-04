//환율 정보 획득

//환율 API url
var API = 'http://api.aoikujira.com/kawase/get.php?code=USD&format=json';
//모듈 로드
//node-module에서 request, fs를 가지고와 지정된 변수에 넣는다
var request = require('request');
var fs = require('fs');

//웹 API 요청
request(API, function(err, res, body) {
  //HTTP 에러 체크
  if(err || res.statusCode != 200) {
    console.log('err : ' + err);
    return;
  }

  //JSOn 을 JS객체로 변환
  var r = JSON.parse(body);
  var krw = r["KRW"];

  //환율을 파일에 저장(파일명에는 날짜 표기)
  var t = new Date();
  var fname = 'USD_KRW_' +
          t.getFullYear() + '-' + (t.getMonth() + 1) +
          '-' + t.getDay() + '.txt';

  var text = 'lusd = ' + krw + 'krw';
  console.log('text :' + text);
  fs.writeFile(fname, text);
});
