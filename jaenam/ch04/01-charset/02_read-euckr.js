const fs = require('fs');
const Iconv = require('iconv').Iconv;
const euckr_utf8 = new Iconv('euc-kr', 'utf-8');
const buf1 = fs.readFileSync('sample-euckr.txt');
const buf2 = euckr_utf8.convert(buf1);
const txt = buf2.toString('utf-8');

fs.writeFileSync('test.txt', txt, 'utf-8');
