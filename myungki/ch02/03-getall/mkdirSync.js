// 모듈 로드
const fs = require('fs');

// 폴더생성
console.log('mkdir 실행');
fs.mkdirSync("test-sync");
console.log("mkdir 완료");
