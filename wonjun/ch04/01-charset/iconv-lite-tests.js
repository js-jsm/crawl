const iconv = require('iconv-lite');
const fs = require('fs');

const str = "?";

const fname = 'iconv-lite-test-euckr.txt';

const buf = iconv.encode(str, 'euc-kr');

fs.writeFileSync(fname, buf, 'binary');

const bin = fs.readFileSync(fname, 'binary');

const txt = iconv.decode(bin, 'euc-kr');

console.log(txt);
