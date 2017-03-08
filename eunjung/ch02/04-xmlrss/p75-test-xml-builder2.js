var xml2js = require('xml2js');
var parseString = xml2js.parseString;
var Builder = xml2js.Builder;

var xml =
    '<fruits shop="AAA">' +
    '<item price="140">Banana</item>' +
    '<item price="200">Apple</item>' +
    '</fruits>';

// xml 을 자바스크립트 객체로 변환
parseString(
    xml,
    function(err, r) {
        // 변환된 자바 스크립트 객체 출력
        console.log(JSON.stringify(r));

        // 변환된 자바스크립트 객체를 다시 XML 로 변환
        var xml = new Builder().buildObject(r);
        console.log(xml);
    }
);
// 실행결과
//  {"fruits":{"$":{"shop":"AAA"},"item":[{"_":"Banana","$":{"price":"140"}},{"_":"Apple","$":{"price":"200"}}]}}
//  <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
//  <fruits shop="AAA">
//    <item price="140">Banana</item>
//    <item price="200">Apple</item>
//  </fruits>
