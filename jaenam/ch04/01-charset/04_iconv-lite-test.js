const iconv = require('iconv-lite');
const fs = require('fs');

// const str = '안녕하세요';
const fname = './iconv-lite-test-euckr.txt';
//
// const buf = iconv.encode(str, 'euc-kr');
// console.log(buf);
//
// fs.writeFileSync(fname, buf, 'binary');

// const bin = fs.readFileSync(fname, 'binary');
const bin = fs.readFileSync(fname);
const buf = iconv.encode(bin, 'euc-kr');
console.log(bin, buf);

// const txt = iconv.decode(bin, 'euc-kr');
// console.log(txt);


// 아 안해
