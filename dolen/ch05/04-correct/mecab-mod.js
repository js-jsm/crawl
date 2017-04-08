const fs       = require('fs'),
      execSync = require('child_process').execSync;

module.exports = text => {
    let cmd = 'mecab TMP_INPUT_FILE --output=TMP_OUTPUT_FILE',
        opt = {
            encoding: 'UTF-8'
        },
        res = [];

    text += '\n';

    fs.writeFileSync('TMP_INPUT_FILE', text, 'UTF-8');

    try {
        execSync(cmd, opt);
        res = fs.readFileSync('TMP_OUTPUT_FILE', 'UTF-8');
    } catch(e) {
        console.log(e);
    }

    return res
        .replace(/\r/g, '')
        .replace(/\s+$/, '')
        .split('\n')
        .map(line => line.replace('\t', ',').split(','));
};