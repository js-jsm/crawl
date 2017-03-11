// 모듈 로드
//node-module에서 xml2js 모듈을 가지고와 xml2js에서 parseString을 실행?했다. -> 변수로 지정한 parseString에 저장
var parseString = require('xml2js').parseString;

// 테스트용 xml데이터
// 간단한 XML 데이터를 담은 문자열을 자바스크립트 객체로 변환하는..
var xml = "<fruits shop='AAA'>" +
          "<item price='140'>banana</item>" +
          "<item price='200'>Apple</item>" +
          "</fruits>";
// xml 절달
//xml데이터를 담은 문자열을 넘긴다.
parseString(xml, function(err, result) {
  //파싱된 결과에 대한 처리를 여기에 착성
  //이자바스트립트의 객체 내용을 확인하기 위해서 JSON.stringify()사용
  console.log(JSON.stringify(result));
});
/*
**결과값* --> 자바 스크립트 객체로 변환하는 js인데 xml에는 없는 '$','_'과 같은 키가 존재하기 때문.
XMl의 요소, 내용, 속성의 구조로 되어 있어서 JSON과 일대일 대응이 되지 않기 때문.
{
    "fruits":{
    "$":{"shop":"AAA"},
    "item":[
      {"_":"banana","$":{"price":"140"}},
      {"_":"Apple","$":{"price":"200"}}
    ]
  }
}
*/
