const PDFDocument = require('pdfkit'),
      fs          = require('fs'),
      doc         = new PDFDocument(),
      data        = [
          {label: '국어', value: 76},
          {label: '수학', value: 48},
          {label: '과학', value: 89},
          {label: '사회', value: 68},
          {label: '음악', value: 55},
          {label: '영어', value: 73},
          {label: '기술', value: 92},
          {label: '미술', value: 58},
          {label: '선택', value: 79}
      ],
      PAGE_WIDTH  = doc.page.width;

doc.pipe(fs.createWriteStream('./output-graph.pdf'));

doc
    .font('H2GTRE.TTF')
    .fontSize(30)
    .text('성적 그래프', 20, 20);

let MARGIN     = 20,
    graphWidth = PAGE_WIDTH - MARGIN * 2 - 50,
    graphX     = MARGIN + 50,
    y          = 80,
    wpx        = graphWidth / 100;

for(let i = 0, o; o = data[i]; i++) {
    const value = o.value,
          label = o.label;

    doc
        .save()
        .rect(graphX, y, wpx * value, 20)
        .fill((i % 2) ? 'blue' : 'red')
        .fontSize(10)
        .fillColor("black")
        .text(label, 30, y + 5)
        .text(value, graphX + 5, y + 5);

    y += 20 + 5;
}

doc.end();
