var parseString = require('xml2js').parseString;
var xml =
    '<items>' +
    '<item><name>Banana</name><price>130</price></item>' +
    '<item><name>Apple</name><price>300</price></item>' +
    '<item><name>Pear</name><price>250</price></item>' +
    '</items>';

parseString(
    xml,
    function(err, r) {
        console.log(JSON.stringify(r));
        console.log('---');
        console.log(r.items.item[0].name[0]);
        console.log(r.items.item[0].price[0]);
    }
);
// 실행결과
//  {"items":{"item":[{"name":["Banana"],"price":["130"]},{"name":["Apple"],"price":["300"]},{"name":["Pear"],"price":["250"]}]}}
//  ---
//  Banana
//  130
