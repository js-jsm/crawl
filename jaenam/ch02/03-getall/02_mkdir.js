const fs = require('fs');
console.log('mkdir 실행');
fs.mkdir('test', ()=> { console.log('폴더생성 완료'); });
console.log('mkdir 실행 완료. 결과 대기');
