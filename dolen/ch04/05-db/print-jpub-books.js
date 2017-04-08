var client   = require('cheerio-httpcli'),
    fs       = require('fs'),
    URL      = require('url'),
    BASE_URL = `http://jpub.tistory.com/category/${encodeURIComponent('제이펍의 도서')}`,
    PAGE_NUM = 6;

let bookList = [];

const scrape = page => {
    if(page > PAGE_NUM) {
        bookList.forEach(str => console.log(str));
        return;
    }

    const VISIT_URL = `${BASE_URL}?page=${page}`;

    // 사이트 방문
    client.fetch(VISIT_URL, (err, $) => {
        if(err)
            return;

        const $tr = $('#searchList > ol > li > span.list > a');

        if(!$tr)
            return;

        for(var i = 0, len = $tr.length; i < len; i++)
            bookList.push(
                $tr.eq(i).text()
            );

        scrape(page + 1);
    });
}

scrape(1);