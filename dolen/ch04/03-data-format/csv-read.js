const fs      = require('fs'),
      CSV     = require('comma-separated-values'),
      Iconv   = require('iconv').Iconv,
      iconv   = new Iconv('EUC-KR', 'UTF-8'),
      buf     = fs.readFileSync('./test.csv'),
      txt     = iconv.convert(buf).toString('utf-8'),
      csv     = new CSV(txt, {
        header: false
      }),
      records = csv.parse();

records.shift();

for(let i = records.length; i--;)
    console.log(records[i]);