var fs = require('fs');

if(!fs.existsSync('test3')) {
    fs.mkdirSync('test3');
    console.log('test3 생성완료');
} else {
    console.log('test3 이 이미 있으므로 생성 안 함');
}
