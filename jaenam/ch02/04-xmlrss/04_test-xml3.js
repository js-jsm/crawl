const { parseString } = require('xml2js');

const xml = `<items>
  <item><name>Banana</name><price>130</price></item>
  <item><name>Apple</name><price>300</price></item>
  <item><name>Pear</name><price>250</price></item>
</items>`;

parseString(xml, (err, res) => {
  console.log(JSON.stringify(res));
  console.log('----');
  console.log(res.items.item[0].name[0]);
  console.log(res.items.item[0].price[0]);
});
