// 모듈로드
const parseString = require('xml2js').parseString;

// 테스트용 XML데이터
const xml = `<fruits shop='AAA'>
    <item price='140'>Banana</item>
    <item price='200'>Apple</item>
</fruits>`;

// XML 전달
parseString(xml, (err, result) => {
    console.log(JSON.stringify(result));

    // fruits를 제공하는 가게이름
    let shop = result.fruits.$.shop;
    console.log(`shop = ${shop}`);

    // fruits의 이름과 가격
    let items = result.fruits.item,
        i;
    for(i in items) {
        let item = items[i];
        console.log(`--name = ${item._}`);
        console.log(`--price = ${item.$.price}`);
    }

});
