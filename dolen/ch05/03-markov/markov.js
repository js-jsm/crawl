const fs             = require('fs'),
      parse          = require('./mecab-mod.js'),
      SENTENCE_COUNT = 3,
      text = fs.readFileSync('sample.txt', 'utf-8');

const setWords = (dic, words) => {
    const [word1, word2, word3] = words;

    if(!dic[word1])
        dic[word1] = {};

    if(!dic[word1][word2])
        dic[word1][word2] = {};

    if(!dic[word1][word2][word3])
        dic[word1][word2][word3] = 0;

    dic[word1][word2][word3]++;
}

const makeDic = items => {
    let words = ['@'],
        dic   = {};

    items.forEach(arr => {
        const word = arr[0],
              pos  = arr[1];

        if(word === '' || pos === 'EOS')
            return;

        words.push(word);

        if(words.length < 3)
            return;

        if(words.length > 3)
            words.splice(0, 1);

        setWords(dic, words);
    });

    return dic;
}

const choiceWord = (wordList, keys = Object.keys(wordList)) => keys[Math.floor(Math.random() * keys.length)];

const makeSentence = dic => {
  for(let i = 0; i < SENTENCE_COUNT; i++) {
      let ret           = [],
          startWordList = dic["@"];

      if(!startWordList)
          continue;

      // {
      //   '@': {
      //     ' ': {
      //       '나': 1
      //     }
      //   }
      // }

      let word1 = choiceWord(startWordList), //' '
          word2 = choiceWord(startWordList[word1]), //'나'
          word3 = null;

      ret.push(word1);
      ret.push(word2);

      while(true) {
          word3 = choiceWord(dic[word1][word2]); //나

          ret.push(word3);

          if(word3 === '.')
            break;

          word1 = word2; //나
          word2 = word3; //는
      }

      console.log(ret.join(''));
  }
}

parse(text, items => {
    const dic = makeDic(items);

    // console.log(dic);

    makeSentence(dic);
});