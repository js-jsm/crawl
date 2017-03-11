// 모듈 로드
var parseString = require('xml2js').parseString;
var xml = '<item>Banana</item>';
parseString(
    xml,
    function(err, result) {
        console.log(result.item);
    }
);
// 결과 : Banana
//  요소에 자식 요소가 없을 경우 요소 이름이 내용에 바로 대입된다.
