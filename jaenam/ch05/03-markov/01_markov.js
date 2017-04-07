const Mecab = require('../02-mecab/02_mecab-mod');
const fs = require('fs');
const mecab = new Mecab();

const SENTENCE_COUNT = 3;
const text = fs.readFileSync('sample.txt', 'utf-8');

const makeDic = items => {
    const words = ['@'];
    const dic = {};
    items.forEach(([word]) => {
        if(!word || word === 'EOS') return;
        words.push(word);
        if(words.length < 3) return;
        if(words.length > 3) words.splice(0, 1);
        setWord3(dic, words);
        if(word == '.') {
            words.splice(0, words.length, '@');
        }
    });
    return dic;
}

const setWord3 = (dic, words3) => {
    const [ w1, w2, w3 ] = words3;
    if(dic[w1] === undefined) dic[w1] = {};
    if(dic[w1][w2] === undefined) dic[w1][w2] = {};
    if(dic[w1][w2][w3] === undefined) dic[w1][w2][w3] = 0;
    dic[w1][w2][w3]++;
}

const makeSentence = dic => {
    for(let i = 0; i < SENTENCE_COUNT; i++) {
        let res = [];
        const startWordList = dic['@'];
        if(!startWordList) continue;
        let w1 = choiceWord(startWordList);
        let w2 = choiceWord(startWordList[w1]);
        res.push(w1, w2);
        for(;;) {
            const w3 = choiceWord(dic[w1][w2]);
            res.push(w3);
            if(w3 === '.') break;
            w1 = w2;
            w2 = w3;
        }
        console.log(res.join(''));
    }
}

const rand = num => Math.floor(Math.random() * num);
const choiceWord = wordList => {
    const keys = Object.keys(wordList);
    const idx = rand(keys.length);
    return keys[idx];
}

mecab.parse(text, items => {
    const dic = makeDic(items);
    makeSentence(dic);
});
