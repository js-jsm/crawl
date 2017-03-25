const fs = require('fs');
const CSV = require('comma-separated-values');
const { Iconv } = require('iconv');

const iconv = new Iconv('EUC-KR', 'UTF-8');
const buf = fs.readFileSync('test.csv');
const txt= iconv.convert(buf).toString('utf-8');

const csv = new CSV(txt, { header: false });
const records = csv.parse();

records.forEach(([name, price, memo]) => {
    console.log(name, price, memo);
});
