const
    fs = require('fs'),
    Mecab = require('../mecab-mod.js'),
    mecab = new Mecab();

const args = (process.argv).slice(2);

if (args.length <= 0) {
    console.log('node word-count.js textfile');
    process.exit();
}

const filename = args.shift();

const text = fs.readFileSync(filename, "utf-8");

const checkWordCount = items => {
    let words = {};

    for (let i in items) {
        let it = items[i],
            w = it[0];

        if (words[w] == undefined) {
            words[w] = 1;
        } else {
            words[w]++;
        }
    }

    let list = [];

    for (let key in words) {
        list.push({
            "word": key,
            "nums": words[key]
        });
    }

    list.sort((a, b) => (b.nums - a.nums));

    for (let i = 0; i < list.length; i+=1) {
        let it = list[i];
        console.log(`${(i+1)} : ${it.word} (${it.nums})`);
    }
}

mecab.parse(text, items => {
    console.log(items);
    checkWordCount(items);
});
