const PDFDocument = require('pdfkit');
const fs = require('fs');

const data = [
  { label: '국어', value: 76 },
  { label: '수학', value: 48 },
  { label: '과학', value: 89 },
  { label: '사회', value: 68 },
  { label: '음악', value: 55 },
  { label: '영어', value: 73 },
  { label: '기술', value: 92 },
  { label: '미술', value: 58 },
  { label: '선택', value: 79 }
];

const doc = new PDFDocument();
const page_w = doc.page.width;
const page_h = doc.page.height;

doc.pipe(fs.createWriteStream('output-graph.pdf'));

doc.fontSize(30)
   .text('성적 그래프', 20, 20);

const margin = 20;
const g_w = page_w - margin * 2 - 50;
const g_x = margin + 50;
const y = 80;
const wpx = g_w / 100;

for (let i = 0; i < data.length; i++) {
  const value = data[i].value;
  const label = data[i].label;
  doc.save()
     .rect(g_x, y, wpx * value, 20)
     .fill( (i % 2) ? 'blue':'red');
  doc.fontSize(10)
     .fillColor("black")
     .text(label, 30, y + 5)
     .text(value, g_x + 5, y + 5);
  y += 20 + 5;
}
doc.end();
