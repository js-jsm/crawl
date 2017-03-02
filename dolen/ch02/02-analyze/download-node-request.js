const request  = require('request'),
      fs       = require('fs'),
      url      = 'http://jpub.tistory.com',
      savePath = 'test.html';

request(url)
    .pipe(fs.createWriteStream(savePath));