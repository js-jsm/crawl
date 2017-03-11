const parseString = require('xml2js').parseString;
const xml = `
  <fruits shop='AAA'>
    <item price='140'>Banana</item>
    <item price='200'>Apple</item>
  </fruits>
`;
parseString(xml, (err, result) => {
  const shop = result.fruits.$.shop;
  console.log("shop=" + shop);
  const items = result.fruits.item;
  for (let i in items) {
    const item = items[i];
    console.log("-- name=" + item._);
    console.log(" price=" + item.$.price);
  }
});
