const MAX_WORD = 40;
const Mecab = require('./mecab-mod-sync');
const fs = require('fs');
const lineByLine = require('n-readlines');

const checkSentence = (line, items, lineno) => {
    let cnt = 0;
    let cur = [];
    let conj = {};
    items.forEach(([word, pos]) => {
        if(word === 'EOS') {
            for(let i in conj) {
                if(conj[i] > 1) {
                    console.log(`[경고] 한 줄에 같은 접속사 ${i}가 ${conj[i]}번 사용됨.`);
                    console.log(`(${lineno}행 ${line})\n`);
                }
            }
            cnt = 0;
            cur = [];
            conj = {};
            return;
        }
        cur.push({ word, pos });

        if(word === '.') {
            if(cnt >= 3) {
                console.log(`[경고] 조사 '의'가 하나의 문장에 ${cnt}회 사용됨.`);
                console.log(`(${lineno}행 ${line})\n`);
            }

            if(cur.length >= MAX_WORD) {
                console.log('[경고] 너무 긴 문장 길이');
                console.log(`(${lineno}행 ${line})\n`);
            }

            cnt = 0;
            cur = [];
        }

        if(word === '의' && pos === 'JKG') cnt++;
        if(pos === 'MAJ') {
            if(conj[word] === undefined) {
                conj[word] = 1;
            } else {
                conj[word]++;
            }
        }
    });
}


const mecab = new Mecab();

const args = process.argv.slice(2);
if(args.length <= 0) {
    console.log('enter argvs');
    process.exit();
}

const filename = args.shift();
const liner = new lineByLine(filename);

let line;
let lineno = 1;

while(line = liner.next()) {
    checkSentence(line, mecab.parse(line), lineno);
    lineno++;
}
