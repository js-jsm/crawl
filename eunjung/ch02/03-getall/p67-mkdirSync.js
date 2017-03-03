// mkdir()함수가 폴더 생성을 비동기로 처리한다면

var fs = require('fs');

console.log('mkdir 실행');
fs.mkdirSync('test-sync');
console.log('mkdir 완료');
