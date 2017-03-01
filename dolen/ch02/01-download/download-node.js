const url      = 'http://jpub.tistory.com/',
      savePath = './test.html',
      http     = require('http'),
      fs       = require('fs'),
      outfile  = fs.createWriteStream(savePath);

http.get(url, res => res.pipe(outfile).on('end', () => outfile.close()));