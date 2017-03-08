const xml2js = require('xml2js');
const parseString = xml2js.parseString;
const builder = xml2js.Builder;
const xml = `<fruits shop="aaa">
  <item price="140">Banana</item>
  <item price="200">Apple</item>
</fruits>`;

parseString(xml, (err, res) => {
  console.log(JSON.stringify(res, null, '\t'));
  const xml = new builder().buildObject(res);
  console.log(xml);
});
