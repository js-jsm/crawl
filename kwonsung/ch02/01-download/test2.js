const http = require('http');
const fs = require('fs');

const url = 'http://www.naver.com/';
let savepath = 'tt.html';

fs.writeFileSync(savepath, url);
console.log(11);
console.log(12);
