const client = require('cheerio-httpcli'),
      url    = 'http://jpub.tistory.com',
      param  = {};

client.fetch(url, param, (err, $) => {
    if(err) {
        console.log('error: ', err);
        return;
    }

    $('a').each((i, tag) => {
        const $this = $(tag),
              text  = $this.text(),
              href  = $this.attr('href');

        console.log(text, href);
    });
});
