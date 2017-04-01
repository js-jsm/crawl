const
    iconv = require('iconv-lite'),
    fs = require('fs');

let str = "안녕하세요",
    fname = 'iconv-lite-test-euckr.txt',

    buf = iconv.encode(str, "euc-kr");

fs.writeFileSync(fname, buf, "binary");

let bin = fs.readFileSync(fname, "binary");

let txt = iconv.decode(bin, "euc-kr");
console.log(txt);
