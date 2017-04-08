// KMA 도시 정보를 엑셀로 저장 for Node.js

var urlType = 'http://www.kma.go.kr/DFSROOT/POINT/DATA/top.json.txt';

// 모듈 로드
// modules-node에서 require함수로 fs, officegen,request을 가지고와 각 지정된 변수에 저장한다.
// xlsx는 officegen함수 안에 있는 'xlsx'을 가지고와 저장한다.
var fs        = require('fs');
var officegen = require('officegen');
var xlsx      = officegen('xlsx');
var request   = require('request');

// 도시 정보 요청
// urlType을 요청하고 요청한 값을 가지고 매개변수를 받아 콜백 함수를 실행한다,
request(urlType, function (err, res, body) {
  // 만약 에러가 난다면 err를 던져라..
  if (err) throw err;
  var list = JSON.parse(body); // 데이터는 json형태로 되어 있으므로 JSON.parse() 메소드를 사용하여 자바스크립트 객체로 변환한다. 그리고 엑셀에 데이터 작성
  exportToExcel(list);
  console.log(list);
});

function exportToExcel(list) {
  //신규 시트 작성
  var sheet  = xlsx.makeNewSheet();
  sheet.name = '도시정보';

  // 직접 데이터작성
  sheet.data[0] = [
    '도시명', '코드'
  ];
  for(var i = 0; i < list.length; i++) {
    var r = list[i];
    sheet.data[i + 1] = [r.code, r.value];
  }
  // 파일 쓰기
  var strm = fs.createWriteStream('kma_city_codes.xlsx');
  xlsx.generate(strm);
  console.log('ok');
}
