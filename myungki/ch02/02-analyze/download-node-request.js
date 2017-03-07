const
    request     = require("request"),   // 모듈로드
    fs          = require("fs"),
    url         = "http://jpub.tistory.com",
    savepath    = "test2.html";

request(url).pipe(fs.createWriteStream(savepath));
