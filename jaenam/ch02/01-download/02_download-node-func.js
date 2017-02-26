const http = require('http');
const fs = require('fs');

const download = (url, savepath, callback) => {
    const outfile = fs.createWriteStream(savepath);
    const req = http.get(url, res => {
        res.pipe(outfile);
        res.on('end', () => {
            outfile.close();
            callback && callback();
        });
    });
}

// 다운로드
download(
    'http://jpub.tistory.com/539',
    'spring.html',
    () => { console.log('ok, spring.'); }
);

download(
    'http://jpub.tistory.com/537',
    'angular.html',
    () => { console.log('ok, angular.'); }
);
