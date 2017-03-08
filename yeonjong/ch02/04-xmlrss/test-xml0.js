//모듈 로드
var parseString = require('xml2js').parseString;

//테스트용 XML데이터
var xml = '<item>Banana</item>';

//XML 전달
parseString(xml, function(err, result) {
  console.log(result.item);
});
