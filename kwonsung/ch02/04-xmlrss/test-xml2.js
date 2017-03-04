const parseString = require('xml2js').parseString;
const xml = `<fruits shop="aaa">
  <item price="140">Banana</item>
  <item price="200">Apple</item>
</fruits>`;

parseString(xml, (err, res) => {
  // console.log(JSON.stringify(res, null, '\t'));

  const shop = res.fruits.$.shop;
  console.log(`shop = ${shop}`);

  const items = res.fruits.item;
  for(const key in items) {
    const item = items[key];
    console.log(`-- name = ${item._}`);
    console.log(`   price = ${item.$.price}`);
  }
});