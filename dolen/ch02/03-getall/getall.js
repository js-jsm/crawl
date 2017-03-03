const client  = require('cheerio-httpcli'),
      request = require('request'),
      fs      = require('fs'),
      urlType = require('url'),
      path    = require('path');

const LINK_LEVEL = 3,
      TARGET_URL  = 'http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/',
      list       = {};


const checkSaveDir = fname => {
    const dir = path.dirname(fname),
          dirlist = dir.split('/');

    let p = '';

    for(var i in dirlist) {
        p += dirlist[i] + '/';

        if(!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
};

const downloadRec = (url, level) => {

    //레벨 확인
    if(level >= LINK_LEVEL)
        return;

    //방문했던 곳 무시
    if(list[url])
        return;

    list[url] = true;

    //외부 사이트 무시
    const us = TARGET_URL.split('/');

    us.pop();

    const base = us.join('/');

    if(url.indexOf(base) < 0)
        return;


    client.fetch(url, {}, (err, $) => {

        $('a').each((idx, tag) => {
            let $this = $(tag),
                  href  = $this.attr('href');

            if(!href)
                return;

            href = urlType.resolve(url, href);

            href = href.replace(/\#.+$/, '');
            downloadRec(href, level + 1);
        });

        if(url.substr(url.length - 1, 1) == '/')
            url += 'index.html';

        const savePath = url.split('/').slice(2).join('/');

        checkSaveDir(savePath);
        console.log(savePath);
        fs.writeFileSync(savePath, $.html());
    });
};


downloadRec(TARGET_URL, 0);
