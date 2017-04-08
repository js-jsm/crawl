const fs = require('fs');
const Mecab = require('../02-mecab/02_mecab-mod');

const args = process.argv.slice(2);
if(args.length <= 0) {
    console.log('error! need args');
    process.exit();
}

const fn = args.shift();
const text = fs.readFileSync(fn, 'utf-8');
const mecab = new Mecab();

const checkWordCount2 = items => {
    const words = {};
    items.forEach(([w, h]) => {
        if(w === 'EOS') return;
        if(['NNG', 'NNP', 'MAJ', 'NP', 'MAG'].some(v => v === h)) {
            if(words[w] === undefined) {
                words[w] = 1;
            } else {
                words[w]++;
            }
        }
    });

    const list = Object.entries(words).map(([k, v]) => ({
        word: k,
        nums: v
    }));
    list.sort((a, b) => b.nums - a.nums);

    list.forEach(({word, nums}, i) => {
        console.log(`${i+1} : ${word} (${nums})`);
    });
}

mecab.parse(text, checkWordCount2);
