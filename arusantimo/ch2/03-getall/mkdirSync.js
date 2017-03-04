const fs = require('fs');
try {
  console.time("mkdir 실행시간:");
  console.log("start");
  fs.mkdirSync("test-sync");
  console.log("end");
  console.timeEnd("mkdir 실행시간:");
} catch (e) {
  console.error('에러났다 ㅜㅜ' + e);
}
