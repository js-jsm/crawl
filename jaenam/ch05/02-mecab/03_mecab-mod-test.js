const Mecab = require('./02_mecab-mod');
const mecab = new Mecab();

mecab.parse('아버지가방에들어가신다', items => {
    items.forEach(([word, pos]) => {
        if(word === 'EOS') return;
        console.log(word, ':', pos);
    });
});
