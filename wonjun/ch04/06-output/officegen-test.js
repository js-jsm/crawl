var fs = require('fs');

var officegen = require('officegen');

var xlsx = officegen('xlsx');

var sheet = xlsx.makeNewSheet();

sheet.name = 'test';

sheet.data[0] = ['상품평', '가격', '특징'];
sheet.data[1] = ['사과', 340];
sheet.data[2] = ['귤', 980];
sheet.data[3] = ['바나나', 280];

sheet.setCell('C2', '신선');
sheet.setCell('C3', '제주도산');

var strm = fs.createWriteStream('test.xlsx');
xlsx.generate(strm);
