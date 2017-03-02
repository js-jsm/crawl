const parseString = require('xml2js').parseString;

const xml = `
    <pigure shop="AAA">
        <item price="140">Banana</item>
        <item price="200">Apple</item>
    </pigure>
`;

parseString(xml, (err, r) => console.log(JSON.stringify(r)));