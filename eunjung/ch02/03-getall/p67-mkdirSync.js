// mkdir()함수가 폴더 생성을 비동기로 처리한다면
// mkdirSync() 함수는 폴더 생성을 동기로 처리해준다. : 배치처리를 기술하는 경우에는 이쪽이 더 간편한다 (?)

var fs = require('fs');

console.log('mkdir 실행');
fs.mkdirSync('test-sync');
console.log('mkdir 완료');
