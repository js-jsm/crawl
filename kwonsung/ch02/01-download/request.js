const Request = require('request');
const fs = require('fs');

// 방법 1
const url = 'http://www.naver.com';
const savepath = 'tt2.html';

Request(url).pipe(fs.createWriteStream(savepath));

// 방법 2
const stream = Request('http://i.imgur.com/dmetFjf.jpga');
const writeStream = fs.createWriteStream('test.jpg');

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