// EUC-KR을 읽어서 UTF-8으로 저장 for Node.js

const fs = require('fs');
const Iconv = require('iconv').Iconv;

// EUC-KR에서 UTF-8로 변환하는 객체
const euckr_utf8 = new Iconv('euc-kr', 'utf-8');

// EUC-KR로 인코딩된 파일 읽기
const buf = fs.readFileSync('sample-euckr.txt');

const buf2 = euckr_utf8.convert(buf); // EUC-KR를 UTF-8으로 변환
const txt = buf2.toString('utf-8');  // 버퍼를 문자열로 변환
console.log(txt);

// UTF-8으로 파일 저장
fs.writeFileSync('test.txt', txt, 'utf-8');
