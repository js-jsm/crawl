const download = (url, savepath, callback) => {
  const http = require('http');
  const fs = require('fs');
  const outfile = fs.createWriteStream(savepath);

  http.get(url, res => {
    res.pipe(outfile);
    res.on('end', () => {
      outfile.close();
      callback();
    })
  });
};

download('http://www.naver.com', 'naver.html', () => console.log('ok, naver'));
download('http://tasvideos.org/', 'tas.html', () => console.log('ok, tas'));
download('http://hiphopplaya.com/', 'hiphop.html', () => console.log('ok, hiphop'));

