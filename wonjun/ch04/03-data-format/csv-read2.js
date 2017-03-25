const fs = require('fs');

const CSV = require('comma-separated-values');

const txt = 'id,name,price\r\n' + '1001,Banana,300\r\n' + '1002,Apple,230,\r\n';

const csv = new CSV(txt, { header: true });

const records = csv.parse();

console.log(records);
