// 문자 코드를 모르는 경우 for Node.js
const fs = require('fs');
const Iconv = require('iconv').Iconv;
const jschardet = require('jschardet');

// 문자 코드를 모르는 파일 읽기
const buf = fs.readFileSync('sample-unknown.txt');

// 문자 코드 판정 수행
const det = jschardet.detect(buf);
console.log(det);

// Iconv 로 utf-8 로 변환하는 객체 생성
const iconv = new Iconv(det.encoding, "utf-8");
const buf2 = iconv.convert(buf); // UTF-8 로 변환
const txt = buf2.toString('utf-8'); // 버퍼를 문자열로 변환
console.log(txt);