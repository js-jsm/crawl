const fs = require('fs');
const execSync = require('child_process').execSync;
const srcText = '찾아라. 그러면 발견할 것이다.\n';

const parse = (text, callback) => {
    fs.writeFileSync('TMP_INPUT_FILE', text, 'UTF-8');
    const cmd = [
        'mecab',
        'TMP_INPUT_FILE',
        '--output=TMP_OUTPUT_FILE'
    ].join(' ');
    const opt = { encoding : 'UTF-8' };
    let res = [];
    try {
        execSync(cmd, opt);
        res = fs.readFileSync('TMP_OUTPUT_FILE', 'UTF-8');
    }
    catch(e) {
        console.log(e);
    }
    res = res
        .replace(/\r/g, '')
        .replace(/\s+$/, '')
        .split('\n')
        .map(line => line.replace('\t', ',').split(','));

    callback(res);
};

parse(
    srcText,
    result => {
        Object.values(result).forEach(([word, pos]) => {
            if(word === 'EOS') return;
            console.log(word, ':', pos);
        });
    }
);
