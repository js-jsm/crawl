var xmlParser = require('xml2js').parseString;

const xml = '<item>Banana</item>';

xmlParser(xml, function(err, result) {
  console.log(result.item);
});
