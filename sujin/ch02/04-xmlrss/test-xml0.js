//모듈 로드
//node-module에 있는 xml2js 모듈을 가지고와 변수로 지정한 parseString에 저장
var parseString = require('xml2js').parseString;

// 테스트용 XML데이터
var xml = '<item>Banana</item>';

//XML을 전달
parseString(xml, function(err, result) {
  console.log(result.item); //결과 : Banana
});

// 결과값 -> 같은 XMl 데이터라면 '_','$' 를 포함하지 않는 오브젝트가 변환 된다.
