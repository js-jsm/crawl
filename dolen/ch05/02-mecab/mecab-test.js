const fs       = require('fs'),
      execSync = require('child_process').execSync,
      srcText  = '찾아라. 그러면 발견할 것이다.\n';


const parse = (text, callback) => {
    let cmd = 'mecab TMP_INPUT_FILE --output=TMP_OUTPUT_FILE',
        opt = {
            encoding: 'UTF-8'
        },
        res = [];

    fs.writeFileSync('TMP_INPUT_FILE', text, 'UTF-8');

    try {
        execSync(cmd, opt);
        res = fs.readFileSync('TMP_OUTPUT_FILE', 'UTF-8');
    } catch(e) {
        console.log(e);
    }

    const lines = res
        .replace(/\r/g, '')
        .replace(/\s+$/, '')
        .split('\n');

    callback(lines.map(line => line.replace('\t', ',').split(',')));
}

parse(srcText, result => result.forEach(o => o[0] === 'EOS' ? null : console.log(`${o[0]} : ${o[1]}`)));