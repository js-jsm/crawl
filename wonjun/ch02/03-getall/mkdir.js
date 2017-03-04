const fs = require('fs');

console.log('MKDIR 실행');

fs.mkdir('test', function() {
  console.log('폴더생성완료');
});

console.log('실행완료. 결과대기');
