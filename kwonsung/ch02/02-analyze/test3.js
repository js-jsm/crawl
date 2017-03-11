var fs = require('fs');
var request = require('request');

var stream = request('http://i.imgur.com/dmetFjf.jpg');
var writeStream = fs.createWriteStream('test.jpg');
// 위에까지 하면 파일 생성만 함.

// 실제 들이붓는 건 write 요놈이 한다.
stream.on('data', function(data) {
  writeStream.write(data)
});

stream.on('end', function() {
  writeStream.end();
});

stream.on('error', function(err) {
  console.log('something is wrong :( ');
  writeStream.close();
});