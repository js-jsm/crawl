const iconv = require('iconv-lite');
const fs = require('fs');
const str = " 안녕한다";
const fname = "iconv-lite-test-sjis.txt";
const buf = iconv.encode(str, "euc-kr");
fs.writeFileSync(fname, buf, "binary");
const bin = fs.readFileSync(fname, "binary");
const txt = iconv.decode(bin, "euc-kr");
console.log(txt);
