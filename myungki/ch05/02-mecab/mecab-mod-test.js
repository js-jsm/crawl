const
    Mecab = require('./mecab-mod.js'),
    mecab = new Mecab(),
    text = "아버지가방에들어가신다";

mecab.parse(text, items => {
    for (let i in items) {
        let k = items[i];
        if (k == "EOS")
            continue;
        console.log(`${k[0]}:${k[1]}`);
    }
});
