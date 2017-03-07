// 모듈로드
const parseString = require('xml2js').parseString;

// 테스트용 XML데이터
const xml = `<fruits shop='AAA'>
    <item price='140'>Banana</item>
    <item price='200'>Apple</item>
</fruits>`;

// XML 전달
parseString(xml, (err, result) => {
    //파싱된 결과에 대한 처리르 여기에 작성
    console.log(JSON.stringify(result));
});
