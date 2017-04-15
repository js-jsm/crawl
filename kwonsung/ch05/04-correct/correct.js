const MAX_WORD = 40;

const Mecab = require('../02-mecab/meacb-mod');
const mecab = new Mecab();
const fs = require('fs');
const lineByLine = require('n-readlines');

const args = process.argv;
args.shift();
args.shift();
if(args.length <= 0) {
  console.log('node correct txtFile');
  process.exit();
}

const filename = args.shift();
const liner = new lineByLine(filename);
let line, lineno = 1;

const checkSentence = (line, items, lineNo) => {
  let cnt = 0;
  let cur = [];
  let conj = {};

  for(const i in items) {
    const it = items[i];
    const pos = it[1];
    const word = it[0];

    if(word === 'EOS') {
      for(const i in conj) {
        if(conj[i] > 1) {
          console.log('(경고) 한 줄에 같은 접속사 ' + i + '가 ' + conj[i] + '번 사용');
          console.log(`(${lineNo}행)${line}\n`);
        }
      }

      cur = [];
      cnt = 0;
      conj = {};
      continue;
    }

    cur.push({word, pos});

    if(word === '.') {
      if(cnt >= 3) {
        console.log('[경고] 조사\'의\'가 하나의 문장에 ' + cnt + '회 사용');
        console.log(`(${lineNo}힝)${line}\n`);
      }

      if(cur.length >= MAX_WORD) {
        console.log('[경고] 너무 긴 문장 길이');
        console.log(`(${lineNo}힝)${line}\n`);
      }

      cnt = 0;
      cur = [];
    }

    if(it[0] === '의' && it[1] === 'JKG') cnt++;

    if(it[1] === 'MAJ') {
      if(typeof(conj[word]) === 'undefined') {
        conj[word] = 1;
      } else {
        conj[word]++;
      }
    }
  }
};

while(line = liner.next()) {
  const res = mecab.parse(line, () =>{
    checkSentence(line, res, lineno);

  });
  console.log(line);
  lineno++;
}

