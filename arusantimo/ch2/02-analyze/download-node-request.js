const request = require('request');
const fs = require('fs');
request("http://jpub.tistory.com/").pipe(fs.createWriteStream("test.html"));
//PIPE 라인으로 엮여 있는건 결과값을 넘겨준다.