const
    Mecab = require('../mecab-mod.js'),
    fs = require('fs');

const
    SENTENCE_COUNT = 3,
    mecab = new Mecab(),
    text = fs.readFileSync("sample.txt", "utf-8");

const makeDic = items => {
    let words = ["@"],
        dic = {};

    for (let i in items) {
        let item = items[i],
            word = item[0];

        if (word == "" || word == "EOS") continue;

        words.push(word);

        if (words.length < 3) continue;

        if (words.length > 3) {
            words.splice(0, 1);
        }

        setWord3(dic, words);

        if (word == ".") {
            words = ["@"];
            continue;
        }
    }

    return dic;
}

const setWord3 = (dic, words3) => {
    let word1 = words3[0],
        word2 = words3[1],
        word3 = words3[2];

    if (dic[word1] == undefined)
        dic[word1] = {};

    if (dic[word1][word2] == undefined)
        dic[word1][word2] = {};

    if (dic[word1][word2][word3] == undefined)
        dic[word1][word2][word3] = 0;

    dic[word1][word2][word3]++;
}

const makeSentence = dic => {
    for (let i=0; i<SENTENCE_COUNT; i+=1) {
        let ret = [],
            startWordList = dic["@"];

        if (!startWordList) continue;

        let word1 = choiceWord(startWordList),
            word2 = choiceWord(startWordList[word1]);

        ret.push(word1);
        ret.push(word2);

        for (;;) {
            let word3 = choiceWord(dic[word1][word2]);

            ret.push(word3);

            if (word3 == ".") break;

            word1 = word2,
            word2 = word3;
        }
        console.log(ret.join(" "));
    }
}

const objKeys = obj => {
    let r = [];

    for (let i in obj) {
        r.push(i);
    }
    return r;
}

const choiceWord = wordList => {
    let keys = objKeys(wordList),
        rndIndex = rnd(keys.length);
    return keys[rndIndex];
}

const rnd = num => Math.floor(Math.random() * num);

mecab.parse(text, items => {
    let dic = makeDic(items);
    console.log(dic);
    makeSentence(dic);
});
