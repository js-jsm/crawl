const fs = require('fs');
fs.readFile('./tsconfig.json', (data, err) => {
  if(err) return console.error(err);
  console.log('테스트 로드 됨', data);
});