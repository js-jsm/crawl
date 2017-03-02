const parseString = require('xml2js').parseString;

const xml = `
    <fruits shop="AAA">
        <item price="140">Banana</item>
        <item price="200">Apple</item>
    </fruits>
`;

parseString(xml, (err, r) => {
    const shop = r.fruits.$.shop;

    console.log(shop, ' : shop');

    const items = r.fruits.item;

    for(const {$, _} of items)
        console.log(`${_}: ${$.price}`);
});