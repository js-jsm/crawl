// url에 있는 파일을 savepath에 다운 로드한다.

var url = "https://jpub.tistory.com/";
var savepath = "test.html";

var http = require('https');
var fs = require('fs');

var outfile = fs.createWriteStream(savepath);

http.get(url, function(res) {
  res.pipe(outfile);
  res.on('end', function() {
    outfile.close();
    console.log('ok');

  });
});
