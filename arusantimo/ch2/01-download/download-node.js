const http = require('http'); // HTTP 모듈
const fs = require('fs'); // 파일처리 관련 모듈
const outfile = fs.createWriteStream("test.html");
http.get("http://jpub.tistory.com/", (res) => {
    res.pipe(outfile);
    res.on('end', () => {
        outfile.close();
        console.log("end!");
    });
});
