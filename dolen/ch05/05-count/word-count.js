const fs    = require('fs'),
      parse = require('./mecab-mod.js'),
      args  = process.argv.slice(2);

if(args.length <= 0) {
    console.log('node word-count.js sample.txt');
    process.exit();
}

const filename = args.shift(),
      text     = fs.readFileSync(filename, "utf-8");

const checkWordCount = items => {
    let words = {},
        list  = [];

  items.forEach(([word, pos]) => {
      if(word === 'EOS')
          return;

      if(!words[word + pos])
          words[word + pos] = 1;
      else
          words[word + pos] += 1;
  });

  Object.keys(words).map(key => list.push({
      'word': key,
      'nums': words[key]
  }))
  .sort((a, b) => b.nums - a.nums);

  list.forEach(({word, nums}) => console.log(`${word}: ${nums}`));
}

parse(text, checkWordCount);