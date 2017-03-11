const http = require('http');
const fs = require('fs');

const url = 'http://www.naver.com/';
let savepath = 'tt.html';

fs.writeFile(savepath, url, err => {
  if(err) return console.error(err);
  console.log(11);
});
console.log(12);
