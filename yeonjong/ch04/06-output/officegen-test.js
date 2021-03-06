//엑셀 파일 생성 테스트


// 모듈로드
var fs = require('fs');
var officegen = require('officegen');
var xlsx = officegen('xlsx');

//신규 시트 생성
var sheet = xlsx.makeNewSheet();
sheet.name = 'test';

//직접 데이터 쓰기
sheet.data[0] = ['상품명', '가격', '특징'];
sheet.data[1] = ['사과', 123];
sheet.data[2] = ['바나나', 858];
sheet.data[3] = ['포도', 100];

//셀명을 지정하여 쓰기
sheet.setCell('C2', '신선');
sheet.setCell('C3', '제주도산');

//파일에 쓰기
var strm = fs.createWriteStream('text.xlsx');
xlsx.generate(strm);
