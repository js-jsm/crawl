const
    execSync = require('child_process').execSync,
    fs = require('fs');

module.exports = function () {

    this.parse = (text, callback) => {
        text += "\n";

        fs.writeFileSync('TMP_INPUT_FILE', text, "UTF-8");

        let cmd = ['mecab', 'TMP_INPUT_FILE', '--output=TMP_OUTPUT_FILE'].join(" "),
            opt = {
                encoding: 'UTF-8'
            },
            res = [];

        try {
            execSync(cmd, opt);
            res = fs.readFileSync('TMP_OUTPUT_FILE', 'UTF-8');
        }
        catch (e) {
            console.log(e);
        }

        res = res.replace(/\r/g, "");
        res = res.replace(/\s+$/, "");

        let lines = res.split("\n");

        res = lines.map(
            line => line.replace('\t', ',').split(',')
        );
        if  (callback) {
            callback(res);
        }
    };
};
