const fs        = require('fs'),
      Iconv     = require('iconv').Iconv,
      jschardet = require('jschardet'),
      buf       = fs.readFileSync('./sample-unknown.txt'),
      det       = jschardet.detect(buf), // 인코딩방식을 알아낸다.
      iconv     = new Iconv(det.encoding, 'utf-8'),
      buf2      = iconv.convert(buf),
      txt       = buf2.toString();


console.log(txt);

