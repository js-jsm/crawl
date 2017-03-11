const fs = require('fs');

if(!fs.existsSync('test3')) {
  fs.mkdirSync('test3');
  console.log('test3 폴더 생성 완료');
} else {
  console.log('test3 폴더가 이미 있으므로 생성 안함');
}
