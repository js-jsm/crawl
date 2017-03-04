//모듈 로드
//node-modules에서 fs모듈을 가지고와 변수로 선언한 fs에 저장
var fs = require('fs');

//폴더를 동기적으로 생성

//existsSync->존재 여부 확인
//만약 'test3'이 없다면
if(!fs.existsSync('test3')) {
  //fs에 있는 mkdirSync함수를 실행해 test3 폴더를 만듬
  fs.mkdirSync('test3');
  console.log('test3 생성 완료');
  //test3 폴더가있다면
} else {
  console.log('test3이 이미 있으므로 생성 안함.');
}
