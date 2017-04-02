const fs = require('fs');

let txt = fs.readFileSync("sample-utf8.txt", "utf-8");
console.log(txt);

fs.writeFileSync("text.txt", txt);
