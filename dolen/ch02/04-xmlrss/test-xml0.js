const parseString = require('xml2js').parseString;

const xml = `
    <item>Apple</item>
`;

parseString(xml, (err, r) => console.log(r.item));
