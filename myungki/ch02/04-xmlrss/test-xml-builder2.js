// 모듈로드
const
    xml2js = require('xml2js'),
    parseString = xml2js.parseString,
    Builder = xml2js.Builder;

// 테스트용 XML 데이터
const xml =
`<fruits shop="AAA">
    <item price="140">Banana</item>
    <item price="300">Apple</item>
</fruits>`;

// XML을 JS객체로 변환
parseString(xml, (err, r) => {
    // 변환된 js객체 출력
    console.log(JSON.stringify(r));

    // 변환된 js객체를 다시 XML롤 변환
    let xml = new Builder().buildObject(r);
    console.log(xml);
})
