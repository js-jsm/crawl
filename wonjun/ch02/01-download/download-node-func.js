const url = 'http://jpub.tistory.com/';
const savepath = 'test.html';

download('http://jpub.tistory.com/539', 'spring.html', () => console.log('ok, spring'));

download('http://jpub.tistory.com/537', 'anguler.html', () => console.log('ok, angular'));

function download(url, savepath, callback) {
  const http = require('http');
  const fs = require('fs');
  const outfile = fs.createWriteStream(savepath);

  const req = http.get(url, (res) => {
    res.pipe(outfile);
    res.on('end', () => {
      outfile.close();
      callback();
    })
  })
}
