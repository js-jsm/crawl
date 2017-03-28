// PDFkit 으로 그래프 그리기 for Node.js

// 모듈 로드
var PDFDocument = require('pdfkit');
var fs = require('fs');

// 그래프 데이터
var data = [
  { label: '국어', value: 76 },
  { label: '수학', value: 45 },
  { label: '과학', value: 34 },
  { label: '사회', value: 67 },
  { label: '음악', value: 90 },
  { label: '영어', value: 67 },
  { label: '기술', value: 80 },
  { label: '미술', value: 12 },
  { label: '선택', value: 65 }
];

// 도큐멘트생성
var doc    = new PDFDocument();
var page_w = doc.page.width;
var page_h = doc.page.height;

//출력 파일 설정
doc.pipe(fs.createWriteStream('output-graph.pdf'));

//폰트 설정

// 타이틀 표시
doc.fontSize(34)
   .text('성적 그래프', 20, 20);

// 그래프 그리기
var margin = 20;
var g_w = page_w - margin * 2 - 50;
var g_x = margin + 50;
var y = 80;
var wpx = g_w / 100;
for(var i = 0; i < data.length; i++) {
  var value = data[i].value;
  var label = data[i].label;
  doc.save()
     .rect(g_x, y, wpx * value, 20)
     .fill( (i % 2) ? 'blue' : 'red');
  doc.fontSize(10)
     .fillColor('black')
     .text(label, 30, y + 5)
     .text(value, g_x + 5, y + 5);
  y += 20 + 5;
}
doc.end();
