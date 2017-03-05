// 모듈로드
const parseString = require('xml2js').parseString;

// 테스트용 XML데이터
const xml = `<item>Apple</item>`;

// XML 전달
parseString(xml, (err, result) => {
    console.log(result.item);
});
