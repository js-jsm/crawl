const fs = require('fs');
const iconv = require('iconv-lite');

const str = '안녕하세요';
const fname = 'icnov-lite-test-euckr.txt';
const buf = iconv.encode(str, 'euc-kr');
fs.writeFileSync(fname, buf, 'binary');

const bin = fs.readFileSync(fname, 'binary');
const txt = iconv.decode(bin, 'euc-kr');
console.log(txt);