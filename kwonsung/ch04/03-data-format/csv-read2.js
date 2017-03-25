const fs = require('fs');
const CSV = require('comma-separated-values');
const csv = fs.readFileSync('./test.csv', 'utf-8');
const csvTxt = new CSV(csv, {header: true});
const records = csvTxt.parse();
console.log(records);
