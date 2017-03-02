const client  = require('cheerio-httpcli'),
      urlType = require('url'),
      url     = 'https://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지'),
      param   = {};

client.fetch(url, param, (err, $) => {
    if(err) {
        console.log('error: ', err);
        return;
    }

    $('img').each((i, tag) => {
        const $this = $(tag),
              src = $this.attr('src');

        console.log(urlType.resolve(url, src));
    });
});
