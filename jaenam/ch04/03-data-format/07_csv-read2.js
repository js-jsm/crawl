const fs = require('fs');
const CSV = require('comma-separated-values');

const txt = `id,name,price\r
1001,Banana,300\r
1002,Apple,230\r`;

const csv = new CSV(txt, { header: true });
const records = csv.parse();
console.log(records);
