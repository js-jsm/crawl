const url = 'http://jpub.tistory.com/';
const savepath = 'test.html';

const http = require('http');
const fs = require('fs');

const outfile = fs.createWriteStream(savepath);

http.get(url, res => {
  res.pipe(outfile);
  res.on('end', () => {
    outfile.close();
    console.log('ok');
  });
});