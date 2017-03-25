const fs = require('fs');
const Iconv = require('iconv').Iconv;
const euckr_utf8 = new Iconv('euc-kr', 'utf-8');
const euc_buf = fs.readFileSync('./sample2.txt');
const utf_buf = euckr_utf8.convert(euc_buf);
const txt = utf_buf.toString('utf-8');
console.log(txt);
fs.writeFileSync('test.txt', txt);