// xml2js 모듈 : XML데이터를 자바스크립트 객체로 변환할 수 있다.
//  parseString() : 첫번째 인자로 XML 데이터 문자열을 넘겨 호출하면 파싱 후 결과를 두 번째 인자로 전달한 콜백함수로 전달된다.
var parseString = require('xml2js').parseString;
var xml =
    '<fruits shop="AAA">' +
    '<item price="140">Banana</item>' +
    '<item price="200">Apple</item>' +
    '</fruits>';

parseString(
    xml,
    function(err, result) {
        // JSON.stringify() 자바스크립트 객체를 JSON 문자열로 변환한다.
        console.log(JSON.stringify(result));
    }
);
// 실행결과
//  {"fruits":
//      {
//          "$":{"shop":"AAA"},
//          "item":[
//              {
//                  "_":"Banana",       // 내용
//                  "$":{"price":"140"} // 속성
//              }
//              ,
//              {
//                  "_":"Apple",        // 내용
//                  "$":{"price":"200"} // 속성
//              }
//          ]
//      }
//  }
