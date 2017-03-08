const parseString = require('xml2js').parseString;
const xml = '<item>Banana</item>';

parseString(xml, (err, res) => {
  console.log(res.item);
});

const req = require('node-inspector')