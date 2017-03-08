//모듈 로드
var xml2js = require('xml2js');

// 자바스크립트 객체
var obj = {
  item: {name:'Banana', price:150}
};

// XML 으로 변환
//xml2js에 있는 Builder()호출 -> builder변수에 저장
var builder = new xml2js.Builder();
//builder안에 buildObject() 매개변수로 obj 넣고 호출
var xml = builder.buildObject(obj);
console.log(xml);
