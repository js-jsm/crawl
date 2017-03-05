const { parseString, Builder } = require('xml2js');

const xml =
`<fruits shop="AAA">
  <item price="140">Banana</item>
  <item price="200">Apple</item>
</fruits>`;

parseString(xml, (err, r) => {
  console.log(JSON.stringify(r));
  console.log(new Builder().buildObject(r));
});
