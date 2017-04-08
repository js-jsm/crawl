const fs = require('fs');
const Mecab = require('./02_mecab-mod');
const mecab = new Mecab();

const args = process.argv.slice(2);
if(args.length !== 2) {
    console.error('[USAGE] node 04_pos-extractor.js {입력텍스트 파일명} {품사}');
    process.exit();
}

const inputFile = args.shift();
const txt = fs.readFileSync(inputFile, 'utf-8');

const targetPos = args.shift();
mecab.parse(txt, items => {
    const res = [];
    items.forEach(([word, pos]) => {
        if(word === 'EOS') return;
        if(pos === targetPos) res.push(word);
    });
    console.log(res.join(', '));
});
