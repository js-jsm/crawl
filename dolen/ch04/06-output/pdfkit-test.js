const PDFDocument = require('pdfkit'),
      fs          = require('fs'),
      doc         = new PDFDocument();

doc.pipe(fs.createWriteStream('output.pdf'));

doc
    .font('H2GTRE.TTF')
    .fontSize(30)
    .text('Hello~!!', 90, 100)
    .fontSize(20)
    .text("안녕하세요 \n", 100, 180)
    .save()
    .moveTo(80, 80)
    .lineTo(250, 80)
    .lineTo(250, 150)
    .lineTo(80, 150)
    .lineTo(80, 80)
    .stroke('#0000FF')
    .addPage()
    .save()
    .moveTo(100, 150)
    .lineTo(100, 250)
    .lineTo(200, 250)
    .fill('#FF0000')
    .end();
