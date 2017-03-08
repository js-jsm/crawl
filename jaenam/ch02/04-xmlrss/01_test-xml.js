const parseString = require('xml2js').parseString;

const xml =
`<fruits shop="AAA">
  <item price="140">Banana</item>
  <item price="200">Apple</item>
</fruits>`;

parseString(xml, (err, res) => {
  console.log(JSON.stringify(res));
});
