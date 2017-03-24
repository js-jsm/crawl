const fs         = require('fs'),
      Iconv      = require('iconv').Iconv,
      euckr_utf8 = new Iconv('euc-kr', 'utf-8'),
      buf        = fs.readFileSync('./sample-euckr.txt'),
      buf2       = euckr_utf8.convert(buf),
      txt        = buf2.toString('utf-8');

console.log(txt);

fs.writeFileSync('./test.txt', txt, 'utf-8');