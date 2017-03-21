const xmlParser = require('xml2js').parseString;

const xml = `<fruits shop='AAA'>
<item price='140'>Banana</item>
<item price='200'>Apple</item>
</fruits>`;

xmlParser(xml, function(err, result) {
  console.log(JSON.stringify(result));

  const shop = result.fruits.$.shop;
  console.log(`shop=${shop}`);

  const items = result.fruits.item;
  for(var i in items) {
    var item = items[i];
    console.log('-- name=' + item._);
    console.log(' price=' + item.$.price);
  }
});
