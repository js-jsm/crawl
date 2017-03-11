// mkdir() 및 mkdirSync() 함수의 경우
// 이미 존재하는 폴더를 생성하려고 하면 에러가 발생한다.
// existsSync() 함수는 해당 폴더가 이미 존재하는지의 여부를
// true, false 로 반환해주어 에러처리를 손쉽게 할 수 있다.

var fs = require('fs');

if(!fs.existsSync('test3')) {
    fs.mkdirSync('test3');
    console.log('test3 생성완료');
} else {
    console.log('test3 이 이미 있으므로 생성 안 함');
}
