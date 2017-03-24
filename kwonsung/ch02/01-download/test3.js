var fs = require('fs');
var request = require('request');

var stream = request('http://i.imgur.com/dmetFjf.jpg');
var writeStream = fs.createWriteStream('test.jpg')

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