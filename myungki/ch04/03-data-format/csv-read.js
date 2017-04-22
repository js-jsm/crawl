const
    fs = require('fs'),
    CSV = require('comma-separated-values'),
    Iconv = require('iconv').Iconv;

let
    iconv = new Iconv('EUC-KR', 'UTF-8'),
    buf = fs.readFileSync('test.csv'),
    txt = iconv.convert(buf).toString('utf-8'),
    csv = new CSV(txt, {header: false}),
    records = csv.parse();

records.shift();

for ( let i = 0; i < records.length; i+=1 ) {
    let fa = records[i],
        name = fa[0],
        price = fa[1],
        memo = fa[2];
    console.log(name, price, memo);
}
