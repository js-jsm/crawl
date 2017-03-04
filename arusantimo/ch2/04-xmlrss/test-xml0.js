const parseString = require('xml2js').parseString;
const xml = "<item>Banana</item>";
parseString(xml, (err, result) => {
  console.log(result.item);
});