//모듈 코드
var parseString = require('xml2js').parseString;

//테스트용 XML데이터
var xml = '<items>' +
          '<item><name>Banana</name><price>130</price></item>' +
          '<item><name>Apple</name><price>100</price></item>' +
          '<item><name>Pear</name><price>300</price></item>' +
          '</items>';

//xml 전달
// xml데이터를 넣은 문자열을 전달한다. --> xml데이터를 담았다고 했는데 그게어딨지? <item></item>이런건가.
parseString(xml, function(err, r) {
  console.log(JSON.stringify(r));

  //각 요소의 표시
  console.log('----');
  console.log(r.items.item[0]);
  console.log(r.items.item[0].price[0]);
});
