const xml2js  = require('xml2js'),
      parseString = xml2js.parseString,
      Builder = xml2js.Builder,
      xml     = `
        <fruits shop="AAA">
            <item price="140">Banana</item>
            <item price="200">Apple</item>
        </fruits>
      `;

parseString(xml, (err, r) => {
    const obj = r;

    console.log(obj);

    const xml = new Builder().buildObject(obj);

    console.log(xml);
});