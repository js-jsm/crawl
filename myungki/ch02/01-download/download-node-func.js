// URL의 파일을 savepath에 다운로드하는 함수
const download = (url, savepath, callback) => {
    let http    = require('http'),
        fs      = require('fs'),
        outfile = fs.createWriteStream(savepath);

    let req = http.get(url, res => {
        res.pipe(outfile);
        res.on('end', _ => {
            outfile.close();
            callback();
        })
    })
}

// 다운로드
download(
    "http://jpub.tistory.com/539",
    "spring.html",
    _ => { console.log("ok, spring"); }
);

download(
    "http://jpub.tistory.com/537",
    "angular.html",
    _ => { console.log("ok, angular."); }
);
