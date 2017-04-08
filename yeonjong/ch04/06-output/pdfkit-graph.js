//PDFKit ㅇ으로 그래프 그리기

//모듈 로드
var PDFDocument = require('pdfkit'),
    fs = require('fs');
//그래프 데이터
var data = [
  {label : '국어', value : 76},
  {label : '수학', value : 56},
  {label : '과학', value : 46},
  {label : '사회', value : 79},
  {label : '음악', value : 93},
  {label : '영어', value : 32},
  {label : '기술', value : 45},
  {label : '미술', value : 67},
  {label : '선택', value : 89},

];

//도큐멘트 생성
var doc = new PDFDocument(),
    page_w = doc.page.width,
    page_h = doc.page.height;

//출력파일 설정
doc.pipe(fs.createWriteStream('output-graph-pdf'));

//폰트 설정
doc.font('H2GTRE.TTF');

//타이틀 표시
doc.fontSize(30)
  .text('성적그래프', 20, 20);

//그래프 그리기
var margin = 20,
    g_w = page_w - margin * 2 - 50,
    g_x = margin + 50,
    y = 80;
    wpx = g_w / 100;

for(var i = 0; i < data.length; i++) {
  var value = data[i].value,
      label = data[i].label;

  doc.save()
    .rect(g_x, y, wpx * value, 20)
    .fill((i % 2) ? 'blue' : 'red');

  doc.fontSize(10)
    .fillColor('black')
    .text(label, 30, y + 5)
    .text(value, g_x + 5, y + 5);

  y += 20 + 5;
}

//편집 종료
doc.end();
