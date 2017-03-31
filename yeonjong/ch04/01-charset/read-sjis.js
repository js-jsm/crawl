//EUC-KR 을 읽어서 UTF-8으로 저장 for node-js
var fs = require('fs');
var Iconv = require('iconv').Iconv;

//EUC-KR 에서 UTF-8로 변환하는 객체
var euckr_utf8 = new Iconv('euc-kr', 'utf-8');
//EUC-KR로 인코딩된 파일 읽기
var buf = fs.readFileSync('sample-euckr.txt');
////EUC-KR 에서 UTF-8로 변환
var buf2 = euckr_utf8.convert(buf);
//버퍼를 문자열로 변환
var txt = buf2.toString('UTF-8');
console.log(txt);

//UTF-8으로 파일 저장
fs.writeFileSync('test.txt', txt, 'utf-8');
