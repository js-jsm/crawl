// request 모듈 사용
var request = require('request');
var fs = require('fs');

// url 저장
var url = 'http://jpub.tistory.com/';
var savepath = 'test.html';

// 다운로드 : 이 한줄로 다운로드가 실행된다.
// fs.createWriteStream(path) 로 path 에 해당하는 빈 파일을 만들고
// request(url).pipe() 로 url 의 내용을 기입한다.
console.log(fs.createWriteStream(savepath));
request(url).pipe(fs.createWriteStream(savepath));
