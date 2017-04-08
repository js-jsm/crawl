const fs         = require('fs'),
      lineByLine = require('n-readlines'),
      parse      = require('./mecab-mod.js'),
      args       = process.argv.slice(2),
      MAX_WORD   = 40;

if(args.length <= 0) {
    console.log('node correct.js sample.txt');
    process.exit();
}

const checkSentence = (line, items, lineNo, cnt = 0, cur = [], conj = {}) => items.forEach(item => {
    const [word, pos] = item;

    if(word === 'EOS') {

        for(var i in conj)
            if(conj[i] > 1)
                console.log(`[경고] 한줄에 같은 접속사 「${i}」가 ${conj[i]}번 사용 (${lineNo} 행) ${line}\n`);

        cur  = [];
        cnt  = 0;
        conj = {};

        return;
    }

    cur.push({
        word,
        pos
    });

    if(word === '.') {
        // 하나의 문장에서 '의' 출현횟수 확인
        if(cnt >= 3)
            console.log(`[경고] 조사'의'가 하나의 문장에 ${cnt} 회 사용 (${lineNo}행) ${line}\n`);

        // 어휘수 확인
        if(cur.length >= MAX_WORD)
            console.log(`[경고] 너무 긴 문장 길이 (${lineNo}행) ${line}\n`);

        cnt = 0;
        cur = [];
    }

    // 조사 '의'가 있는지 확인
    if(word === '의' && pos === 'JKG')
        cnt++;

    // 접속사 출현 확인
    if(pos == 'MAJ')
        if(typeof(conj[word]) == 'undefined')
            conj[word] = 1;
        else
            conj[word]++;
});

const filename = args.shift(),
      liner    = new lineByLine(filename);

let line,
    lineNo = 1;

while(line = liner.next()) {
    const res = parse(line);

    checkSentence(line, res, lineNo);

    lineNo++;
}
