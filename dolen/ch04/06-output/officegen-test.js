const fs        = require('fs'),
      officegen = require('officegen'),
      xlsx      = officegen('xlsx'),
      sheet = xlsx.makeNewSheet();

sheet.name = 'test';

sheet.data[0] = ['상품명', '가격', '특징'];
sheet.data[1] = ['사과', 340];
sheet.data[2] = ['귤', 980];
sheet.data[3] = ['바나나', 280];

sheet.setCell('C2', '신선');
sheet.setCell('C3', '제주도산');

xlsx.generate(fs.createWriteStream('./test.xlsx'));

