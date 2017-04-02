const PDFDocument = require('pdfkit');
const fs = require('fs');

const datas = [
  {label: '국어', value: 76},
  {label: '영어', value: 88},
  {label: '수학', value: 99}
];

const doc = new PDFDocument();
const page_w = doc.page.width;
const page_h = doc.page.height;

doc.pipe(fs.createWriteStream('output-graph.pdf'));
doc.font('NanumMyeongjo.ttf');
doc.fontSize(30).text('성적 그래프', 20, 20);

const margin = 20;
const g_w = page_w - margin * 2 - 50;
const g_x = margin + 50;
let y = 80;
const wpx = g_w / 100;
datas.forEach((v, i) => {
  const {value, label} = v;
  doc.save().rect(g_x, y, wpx * value, 20).fill((i%2) ? 'blue' : 'red');
  doc.fontSize(10).fillColor('black').text(label, 30, y + 5).text(value, g_x + 5, y+5);
  y+=25;
});

doc.end();
