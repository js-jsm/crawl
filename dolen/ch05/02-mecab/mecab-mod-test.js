const parse = require('./mecab-mod.js'),
      text  = '아버지가방에들어가신다';

parse(text, result => result.forEach(o => o[0] === 'EOS' ? null : console.log(`${o[0]} : ${o[1]}`)));