const client = require('cheerio-httpcli'),
      urlType = require('url'),
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

        console.log($this.attr('href'));

        if(!href) {
            return;
        }

        const href2 = urlType.resolve(url, href);

        console.log(text, href, ' => ', href2);
    });
});
