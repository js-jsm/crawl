const SENTENCE_COUNT = 3;
const Mecab = require('../02-mecab/meacb-mod');
const mecab = new Mecab();
const fs = require('fs');

const text = fs.readFileSync('sample.txt', 'utf-8');

const setWord3 = (dic, words3) => {
  const [word1, word2, word3] = words3;
  if(dic[word1] === undefined) dic[word1] = {};
  if(dic[word1][word2] === undefined) dic[word1][word2] = {};
  if(dic[word1][word2][word3] === undefined) dic[word1][word2][word3] = 0;
  dic[word1][word2][word3]++;
};

const makeDic = items => {
  let words = ['@'];
  const dic = {};
  for(const key in items) {
    const item = items[key];
    const word = item[0];
    if(word === '' || word === 'EOS') continue;
    words.push(word);
    if(words.length < 3) continue;
    if(words.length > 3) words.splice(0, 1);
    setWord3(dic, words);

    if(word === '.') words = ['@'];
  }

  return dic;
};

const objKeys = obj => {
  const r = [];
  for(const key in obj) r.push(key);
  return r;
};

const rnd = num => Math.floor(Math.random() * num);

const choiceWord = wordList => {
  const keys = objKeys(wordList);
  const rndIndex = rnd(keys.length);
  return keys[rndIndex];
};

const makeSentence = dic => {
  for(let i=0; i<SENTENCE_COUNT; i++) {
    const ret = [];

    const startWordList = dic['@'];
    if(!startWordList) continue;

    let word1 = choiceWord(startWordList)
    let word2 = choiceWord(startWordList[word1])
    ret.push(word1);
    ret.push(word2);

    for(;;) {
      const word3 = choiceWord(dic[word1][word2]);
      ret.push(word3);
      if(word3 === '.') break;

      word1 = word2;
      word2 = word3;
    }

    console.log(ret.join(' '));
  }
};

mecab.parse(text, items => {
  const dic = makeDic(items);
  console.log(dic);
  makeSentence(dic);
});