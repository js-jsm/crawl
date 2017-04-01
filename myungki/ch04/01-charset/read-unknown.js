const
    fs = require('fs'),
    Iconv = require('iconv').Iconv,
    jsc = require('jschardet'),

    buf = fs.readFileSync('sample-unknown.txt'),
    det = jsc.detect(buf);

console.log(det);

let iconv = new Iconv(det.encoding, 'utf-8'),
    buf2 = iconv.convert(buf),
    txt = buf2.toString('utf-8');

console.log(txt);
