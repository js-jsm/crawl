const fs = require('fs');
const Iconv = require('iconv').Iconv;
const jschardet = require('jschardet');

const buf = fs.readFileSync('./icnov-lite-test-euckr.txt');
const det = jschardet.detect(buf);
console.log(det);

const iconv = new Iconv(det, 'utf-8');
const utf_buf = iconv.convert(buf);
const txt = utf_buf.toString('utf-8');
console.log(txt);
fs.writeFileSync('test.txt', txt);