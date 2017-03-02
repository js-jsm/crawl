const client  = require('cheerio-httpcli'),
      request = require('request'),
      fs      = require('fs'),
      urlType = require('url'),
      url     = 'https://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지'),
      saveDir = __dirname + '/img',
      param   = {};

if(!fs.existsSync(saveDir))
    fs.mkdirSync(saveDir);


client.fetch(url, param, (err, $) => {
    if(err) {
        console.log('error: ', err);
        return;
    }

    $('img').each((i, tag) => {
        const $this = $(tag),
              src = urlType.resolve(url, $this.attr('src')),
              fname = saveDir + '/' + urlType.parse(src).pathname.replace(/[^a-zA-Z0-9]+/g, '_');

        request(src)
            .pipe(fs.createWriteStream(fname));
    });
});
