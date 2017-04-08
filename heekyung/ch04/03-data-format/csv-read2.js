// CVS 파일 읽기 for Node.js

var fs = require('fs');
var csv = require('comma-separated-values');

// csv 데이터
var txt = 'id,name,price\r\n1001,Banana,300\r\n1002,Applem230\r\n';
var csv = new csv(txt, {header: true});
var records = csv.parse();

//콘솔 출력
console.log(records);
