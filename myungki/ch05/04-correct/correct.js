const
    Mecab = require('./mecab-mod-sync.js'),
    fs = require('fs'),
    linebyLine = require('n-readlines');


const checkSentence = (line, items, lineno) => {
    let cnt = 0,
        cur = [],
        conj = {};

    for (let i in items) {
        let it = items[i],
            word = it[0],
            pos = it[1];

        if (word == "EOS") {
            for (let i in conj) {
                if (conj[i] > 1) {
                    console.log(`[경고] 한 줄에 같은 접속사 ${i}가 ${conj[i]}번 사용`);
                    console.log(`(${lineno}행) ${line}\n`);
                }
            }

            cur = [];
            cnt = 0;
            conj = {};
            continue;
        }

        cur.push({word: word, pos: pos});

        if (word == ".") {
            if (cnt >= 3) {
                console.log(`[경고] 조사 "의"가 하나의 문장에 ${cnt}회 사용`);
                console.log(`(${lineno}행) ${line}\n`);
            }

            if (cur.lenth > MAX_WORD) {
                console.log(`[경고] 너무 긴 문장 길이`);
                console.log(`(${lineno}행) ${line}\n`);
            }

            cnt = 0;
            cur = [];
        }

        if (it[0] == "의" && it[1] == "JKG") cnt++;

        if (it[1] == "MAJ") {
            if (typeof conj[word] == "undefined") {
                conj[word] = 1;
            } else {
                conj[word]++;
            }
        }
    }
}

const
    MAX_WORD = 40,
    mecab = new Mecab();

let args = process.argv;
args.shift();
args.shift();

if (args.length <= 0) {
    console.log("node kousei.js textfile");
    process.exit();
}

let filename = args.shift();

const liner = new linebyLine(filename);

let line,
    lineno = 1;

while (line = liner.next()) {
    let res = mecab.parse(line);
    checkSentence(line, res, lineno);
    lineno++;
}
