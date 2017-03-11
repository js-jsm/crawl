//모듈 로드
//
var fs = require('fs');

//폴더 생성
console.log('mkdir실행');
//fs모듈에서 mkdir함수 실행 -> 'test'라는문자열을 request받아 폴더 생성 
fs.mkdir('test', function() {
  console.log('폴더 생성 완료');
});
console.log('mkdir 실행 완료. 결과 대기');
