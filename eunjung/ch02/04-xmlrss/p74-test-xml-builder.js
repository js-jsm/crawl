// 자바스크립트의 객체를 XML 로 변환

// 모듈 로드
var xml2js = require('xml2js');

// 자바스크립트 객체
var obj = {
    item : {
        name : 'Banana',
        price : 150
    }
}

// Builder 클래스 사용
var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);
console.log(xml);

// 실행결과
//  <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
//  <item>
//    <name>Banana</name>
//    <price>150</price>
//  </item>
