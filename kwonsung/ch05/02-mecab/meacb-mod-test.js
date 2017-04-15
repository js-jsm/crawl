const Mecab = require('./meacb-mod');
const mecab = new Mecab();

const txt = '아버지가방에들어가신다';
mecab.parse(txt, items => {
  for(const i in items) {
    const k = items[i];
    if(k === 'EOS') continue;
    console.log(k[0] + ': ' + k[1]);
  }
});
