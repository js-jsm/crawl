const { parseString } = require('xml2js');
const xml = '<item>Banana</item>';

parseString(xml, (err, res) => {
  console.log(res.item);
});
