const execSync = require('child_process').execSync;
const fs = require('fs');

module.exports = class Mecab {
  parse(text) {
    const cmd = 'mecab TMP_INPUT_FILE --output=TMP_OUTPUT_FILE';
    const opt = {encoding: 'utf-8'};
    let res = [];

    text += '\n';

    fs.writeFileSync('TMP_INPUT_FILE', text, 'utf-8');

    try {
      execSync(cmd, opt);
      res = fs.readFileSync('TMP_OUTPUT_FILE', 'utf-8');
    } catch(e) { console.log(e); }

    res = res.replace(/\r/g, '');
    res = res.replace(/\s+$/g, '');
    const lines = res.split('\n');

    res = lines.map(v => v.replace('\t', ',').split(','));

    return res;
  }
};