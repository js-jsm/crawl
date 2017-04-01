const fs = require('fs');
const officegen = require('officegen');
const xlsx = officegen('xlsx');

const sheet = xlsx.makeNewSheet();
sheet.name = 'test';

sheet.data[0] = ['상품명', '가격', '특징'];
sheet.data[1] = ['사과', 230];
sheet.data[2] = ['귤', 550];
sheet.data[3] = ['바나나', 130];

sheet.setCell('C2', '신선');
sheet.setCell('C3', '제주도산');

const strm = fs.createWriteStream('test.xlsx');
xlsx.generate(strm);
