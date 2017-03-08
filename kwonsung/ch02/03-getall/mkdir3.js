const fs = require('fs');

if(!fs.existsSync('test3')) {
  fs.mkdirSync('test3');
  console.log('test3 생성 완료');
} else {
  console.log('test3이 이미 존재함!');
}
