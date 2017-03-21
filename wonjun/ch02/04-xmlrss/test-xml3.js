const xmlParser = require('xml2js').parseString;

const xml =
`<items>
<item><name>Banana</name><price>130</price></item>
<item><name>Apple</name><price>320</price></item>
<item><name>Melon</name><price>240</price></item>
</items>`;

xmlParser(xml, function(err, result) {
  console.log(JSON.stringify(result));
  console.log(result.items.item[0].name[0]);
  console.log(result.items.item[0].price[0]);
});
