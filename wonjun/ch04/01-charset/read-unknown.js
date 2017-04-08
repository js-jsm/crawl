const fs = require('fs');
const Iconv = require('iconv').Iconv;
const jschardet = require('jschardet');

const buf = fs.readFileSync('sample-unknown.txt');

const det = jschardet.detect(buf);

console.log(det);

const iconv = new Iconv(det.encoding, 'utf-8');

const buf2 = euckr_utf8.convert(buf);

const txt = buf2.toString('utf-8');

console.log(txt);
