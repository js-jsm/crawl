const fs = require('fs');
const Iconv = require('iconv').Iconv;

const euckr_utf8 = new Iconv('euc-kr', 'utf-8');

const buf = fs.readFileSync('sample-euckr.txt');

const buf2 = euckr_utf8.convert(buf);

const txt = buf2.toString('utf-8');

console.log(txt);

fs.writeFileSync('test.txt', txt, 'utf-8');
