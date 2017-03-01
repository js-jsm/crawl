download(
  'http://jpub.tistory.com/539',
  'spring.html',
  function() {
    console.log('ok, spring.');
  }
);

download(
  'http://jpub.tistory.com/573',
  'angular.html',
  function() {
    console.log('ok, angular.');
  }
);

function download(url, savePath, callback) {
  var http = require('http');
  var fs = require('fs');
  var outfile = fs.createWriteStream(savePath);

  var req = http.get(url, function(res) {
    res.pipe(outfile);
    res.on('end', function() {
      outfile.close;
      callback();
    });
  });
}
