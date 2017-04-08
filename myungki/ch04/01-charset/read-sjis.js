const
    fs = require('fs'),
    Iconv = require('iconv').Iconv,
    etou = new Iconv('euc-kr', 'utf-8'),
    buf = fs.readFileSync('sample-euckr.txt'),
    buf2 = etou.convert(buf),
    txt = buf2.toString('utf-8');

console.log(txt);

fs.writeFileSync('test2.txt', txt, 'utf-8');
