// 모듈 로드
var request = require('request');
var fs = require('fs');

// URL 지정
var url = 'http://jpub.tistory.com/';
var savepath = 'test.html';

// 다운로드
request(url).pipe(fs.createWriteStream(savepath));
