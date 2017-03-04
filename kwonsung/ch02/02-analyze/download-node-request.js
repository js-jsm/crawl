const request = require('request');
const fs = require('fs');

const url = 'http://jpub.tistory.com/';
const savepath = 'test.html';

request(url).pipe(fs.createWriteStream(savepath));
