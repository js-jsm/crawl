const
    fs = require('fs'),
    Mecab = require('../mecab-mod.js'),
    mecab = new Mecab(),
    args = process.argv;

args.shift();
args.shift();

if (args.length != 2) {
    console.log("[USAGE] pos-words.js 입력텍스트 품사");
    process.exit();
}

const
    inputfile = args.shift(),
    txt = fs.readFileSync(inputfile, "utf-8"),
    targetPos = args.shift();

mecab.parse(txt, items => {
    for (let i in items) {
        let k = items[i],
            word = k[0],
            pos = k[1];

        if (k == "EOS") continue;

        if (pos == targetPos) {
            console.log(word);
        }
    }
});
