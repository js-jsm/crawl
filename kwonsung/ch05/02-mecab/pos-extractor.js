const Mecab = require('./meacb-mod');
const mecab = new Mecab();
const fs = require('fs');

const args = process.argv;
args.shift();
args.shift();

if(args.length !== 2) {
  console.log('USAGE: pos-word 입력텍스트 품사');
  process.exit();
}

const inputfile = args.shift();
const txt = fs.readFileSync(inputfile, 'utf-8');

const targetPos = args.shift();
mecab.parse(txt, items => {
  for(const i in items) {
    const k = items[i];
    const word = k[0];
    const pos = k[1];
    if(k === 'EOS') continue;
    if(pos === targetPos) console.log(word);
  }
});
