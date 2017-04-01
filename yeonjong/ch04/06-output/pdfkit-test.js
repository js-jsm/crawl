//PDFkit 사용 테스트 for node.js

//모듈 로드
var PDFDocument = require('pdfkit');
var fs = require('fs');

//도큐먼트 생성
var doc = new PDFDocument();

//출력 파일 설정
doc.pipe(fs.createWriteStream('output.pdf'));

//폰츠 지정
doc.font('H2GTRE.TTF');

//문자표시
doc.fontsize(30)
  .text('hello~!!', 90, 100);
doc.fontsize(20)
  .text('안녕하세여\ㅜn', 100, 180);

//도형그리기
doc.save()
  .moveTo(80, 80)
  .lineTo(250, 80)
  .lineTo(250, 150)
  .lineTo(80, 150)
  .lineTo(80, 80)
  .stroke('#0000FF');

//페이지 추가
doc.addPage();

//도형 그리기
doc.save()
  .moveTo(100, 150)
  .lineTo(100, 250)
  .lineTo(200, 250)
  .fill('#FF0000');

//종료
doc.end();
