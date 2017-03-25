const fs = require('fs');
const CSV = require('comma-separated-values');
const csv = fs.readFileSync('./test.csv', 'utf-8');
const csvTxt = new CSV(csv, {header: false});
const records = csvTxt.parse();
records.shift();
for(const item of records) console.log(item[0], item[1], item[2]);
