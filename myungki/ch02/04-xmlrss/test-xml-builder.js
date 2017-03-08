// 모듈로드
const XML2JS = require('xml2js');

// js 객체
const obj = {
    item: {
        name: "Banana",
        price: 150
    }
};

// XML로 변환
const
    builder = new XML2JS.Builder(),
    xml = builder.buildObject(obj);

console.log(xml);
