const
    fs = require('fs'),
    execSync = require('child_process').execSync,
    srcText = "찾아라. 그러면 발견할 것이다.\n";

const parse = (text, callback) => {
    fs.writeFileSync('TMP_INPUT_FILE', text, "UTF-8");

    let cmd = ['mecab', 'TMP_INPUT_FILE', '--output=TMP_OUTPUT_FILE'].join(" "),
        opt = {encoding: 'UTF-8'},
        res = [];

    try {
        execSync(cmd, opt);
        res = fs.readFileSync('TMP_OUTPUT_FILE', 'UTF-8');
    }
    catch(e) {
        console.log(e);
    }

    res = res.replace(/\r/g, "");
    res = res.replace(/\s+$/, "");

    let lines = res.split("\n");

    res = lines.map(line => line.replace('\t', ',').split(','));

    callback(res);

};

parse(srcText, result => {
    for (let i in result) {
        let word = result[i][0],
            pos = result[i][1];
        if (word == "EOS") continue;
        console.log(`${word}: ${pos}`);
    }
});
