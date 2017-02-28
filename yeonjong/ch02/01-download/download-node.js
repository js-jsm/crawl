var url = 'http://jpub.tistory.com/'
var savePath = 'test.html';
var http = require('http');
var fs = require('fs');
var outfile = fs.createWriteStream(savePath);

http.get(url, function(res) {
  res.pipe(outfile);
  res.on('end', function() {
    outfile.close();
    console.log('ok');
  });
});
