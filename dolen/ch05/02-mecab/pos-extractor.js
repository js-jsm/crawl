const fs    = require('fs'),
      parse = require('./mecab-mod.js'),
      args  = process.argv.slice(2); //for node script.js delete command

if(args.length != 2) {
  console.log('[USAGE] pos-words.js 입력텍스트 품사');
  process.exit();
}

const inputfile = args.shift(),
      txt       = fs.readFileSync(inputfile, 'utf-8'),
      targetPos = args.shift();


parse(txt, result => result.forEach(o => o[1] === targetPos ? console.log(o[0]) : null));