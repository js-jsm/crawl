const fs    = require('fs'),
      iconv = require('iconv-lite'),
      str   = '안녕하세요.',
      fname = './iconv-lite-test-euckr.txt',
      buf   = iconv.encode(str, 'euc-kr');

fs.writeFileSync(fname, buf, 'binary');

const bin = fs.readFileSync(fname, 'binary'),
      txt = iconv.decode(bin, 'euc-kr');

console.log(txt);