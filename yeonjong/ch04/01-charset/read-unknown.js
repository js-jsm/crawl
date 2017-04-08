//문자 코드를 모르는 경우
var fs = require('fs');
var Iconv = require('Iconv').Iconv;
var jschardet = require('jschardet');

//문자 코드를 모르는 파일 읽기
var buf = fs.readFileSync('sample-unknown.txt');

//문자 코드 판정 수행
var det = jschardet.detect(buf);
console.log('det');

//
