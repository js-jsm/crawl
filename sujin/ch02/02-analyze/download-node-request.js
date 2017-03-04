//node_modules에서 request, fs모듈을 가지고와 변수로 지정한 request, fs 에 저장한다.
var request = require('request');
var fs = require('fs');

//url 지정
var url = 'http://jpub.tistory.com/';
var savepath = 'test.html';

// 다운로드
//                 fs에서 createWriteStream의 함수를 실행하는데 savepath를 매개변수로 넣고 실행 한다.
//                  savepath는 'test.html' 이라는 문자열 이다.
//request에서 지정한 url파일을 savepath(빈껍데기) 에 집어 넣는다.(그려 넣는다) --> html 태그가 나오려나.
request(url).pipe(fs.createWriteStream(savepath));
