// 모듈 로드
const fs = require('fs');

// 폴더생성
console.log('mkdir 실행');
fs.mkdir("test", _ => console.log('폴더생성 완료'));
console.log("mkdir 실행완료. 결과대기");
