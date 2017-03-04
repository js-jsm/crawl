//모둘 로드
var xml2js = require('xml2js');
var parseString = xml2js.parseString;
var Builder = xml2js.Builder;

// 테스트용 XML 데이터
var xml = "<fruits shop = 'AAA'>" +
    "<item price='140'>Banana</item>" +
    "<item price='100'>Apple</item>" +
    "</fruits";

// XML을 자바스크립트 객체로 변환
// xml데이터를 넣은 문자열  넣기
parseString(xml, function(err, r) {
  //변환된 자바 스크립트 객체 출력
  //이자바스트립트의 객체 내용을 확인하기 위해서 JSON.stringify()사용
  console.log(JSON.stringify(r));

  // 변환된 자바스크립트 객체를 다시 xml로 변환
  var xml = new Builder().buildObject(r);
  console.log(xml);
});
