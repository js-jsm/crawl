const http     = require('http'),
      fs       = require('fs');

const download = (url, savePath, outFile = fs.createWriteStream(savePath)) => http.get(url, res => res.pipe(outFile).on('end', () => outFile.close()));

//do download html
download('http://jpub.tistory.com/539', './spring.html');

//do download html
download('http://jpub.tistory.com/537', './angular.html');

