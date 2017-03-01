function download(url, savepath) {
  const http = require('http');
  const fs = require('fs');
  const outfile = fs.createWriteStream(savepath);
  const req = http.get(url, (res) => {
    res.pipe(outfile);
    res.on('end', () => {
      outfile.close();
      console.log(`${savepath} download!`);
    });
  });
}
download("http://jpub.tistory.com/539", "spring.html");
download("http://jpub.tistory.com/537", "angular.html");