// 엑셀 파일 생성 테스트 for Node.js

// officegen은 엑셀이 설치 되지 않은 환경에서도 엑셀을 사용할 수 있게 만든 라이브러리 이다.
//모듈 로드
// modules-node에서 require함수로 fs, officegen을 가지고와 각 지정된 변수에 저장한다.
// xlsx는 officegen함수 안에 있는 'xlsx'을 가지고와 저장한다.
var fs        = require('fs');
var officegen = require('officegen')
var xlsx      = officegen('xlsx');

// 신규 시트 생성
var sheet  = xlsx.makeNewSheet();
sheet.name = 'test';

// 직접 데이터 쓰기
sheet.data[0] = ['상품명', '가격', '특징'];
sheet.data[1] = ['사과', '360'];
sheet.data[2] = ['귤', '344'];
sheet.data[3] = ['바나나', '466'];

// 셀명을 지정하여 쓰기
sheet.setCell('C2', '신선');
sheet.setCell('C3', '제주도산');

// 파일에 쓰기
var strm = fs.createWriteStream('text.xlsx');
xlsx.generate(strm);
