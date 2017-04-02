const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));
doc.font('NanumMyeongjo.ttf');
doc.fontSize(30).text('Yellow', 90, 100);
doc.fontSize(20).text('안녕하세요\n', 100, 180);

doc.save().moveTo(80, 80).lineTo(250, 80).lineTo(250, 150).lineTo(80, 150).lineTo(80, 80).stroke('#0000FF');

doc.addPage();
doc.save().moveTo(80, 80).lineTo(250, 80).lineTo(250, 150).lineTo(80, 150).lineTo(80, 80).stroke('#00FFFF');

doc.end();
