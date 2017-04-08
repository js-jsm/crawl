// PDFkit 사용 테스트 for Node.js

//모듈 로드
//modules-node에서 require()을 사용해 'pdfkit', 'fs '의 모듈을 가지고와 각 지정한 변수에 저장한다.
var PDFDocument = require('pdfkit');
var fs = require('fs');

// 도큐먼트 생성
var doc = new PDFDocument();

// 출력 파일 설정
// pipe() => 연결 시키는 함수?

doc.pipe(fs.createWriteStream('output.pdf'));

//폰트 지정
//doc.font('H2GTRE.TTF');

// 문자 표시
doc.fontSize(30)
    .text('Hello~!!', 90, 100);
doc.fontSize(20)
    .text('안녕하세용 \n',100,180);

// 도형 그리기
doc.save()
   .moveTo(80, 80)
   .lineTo(250, 80)
   .lineTo(250, 150)
   .lineTo(80, 150)
   .lineTo(80, 80)
   .stroke('#0000FF');

// 페이지 추가
doc.addPage();

// 도형 그리기
doc.save()
   .moveTo(100, 150)
   .lineTo(100, 250)
   .lineTo(200, 250)
   .fill('#FF0000');

//종료
doc.end();
