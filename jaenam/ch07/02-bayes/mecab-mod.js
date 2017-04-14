let execSync = require('child_process').execSync;
let fs = require('fs');

module.exports = class Mecab {
    constructor(
        inputFile = 'TMP_INPUT_FILE',
        outputFile = 'TMP_OUTPUT_FILE'
    ) {
        this.inputFile = inputFile;
        this.outputFile = outputFile;
    }

    parse(text) {
        const cmd = `mecab ${this.inputFile} --output=${this.outputFile}`;
        const opt = { encoding: 'UTF-8' };
        let res = [];

        text = text + '\n';
        fs.writeFileSync(this.inputFile, text, 'UTF-8');
        try {
            execSync(cmd, opt);
            res = fs.readFileSync(this.outputFile, 'UTF-8');
        } catch (e) {
            console.log(e);
        }

        res = res
            .replace(/\r/g, '')
            .replace(/\s+$/, '')
            .split('\n')
            .map(line => line.replace('\t', ',').split(','));

        return res;
    }
};
