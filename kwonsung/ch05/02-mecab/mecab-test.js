const fs = require('fs');
const execSync = require('child_process').execSync;

const str = '찾아라. 그러면 발견할 것이다.\n';

const parse = (text, callback) => {
  fs.writeFileSync('TMP_INPUT_FILE', text, 'UTF-8');
  const cmd = [
    'mecab',
    'TMP_INPUT_FILE',
    '--output=TMP_OUTPUT_FILE'
  ].join(' ');

  const opt = {encoding: 'UTF-8'};
  let res = [];
  try {
    execSync(cmd, opt);
    res = fs.readFileSync('TMP_OUTPUT_FILE', 'UTF-8');
  } catch(e) {
    console.log(e);
  }

  res = res.replace(/\r/g, '');
  res = res.replace(/\s+/g, '');
  const lines = res.split('\n');
  res = lines.map(v => v.replace('\t', '').split(','));

  callback(res);
};

parse(str, res => {
  for(const key in res) {
    const word = res[key][0];
    const pos = res[key][1];
    if(word === 'EOS') continue;
    console.log(`${word}: ${pos}`);
  }
});