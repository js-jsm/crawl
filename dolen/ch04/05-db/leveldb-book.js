var client   = require('cheerio-httpcli'),
    fs       = require('fs'),
    URL      = require('url'),
    db       = require('level')(__dirname + '/levelDB-JPUB'),
    BASE_URL = `http://jpub.tistory.com/category/${encodeURIComponent('제이펍의 도서')}`,
    PAGE_NUM = 6;

let bookList = [];

const scrape = page => {
    if(page > PAGE_NUM) {
        insert();
        return;
    }

    const VISIT_URL = `${BASE_URL}?page=${page}`;

    // 사이트 방문
    client.fetch(VISIT_URL, function(err, $) {
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

const insert = () => {
    var books = {};

    console.log("dbinsert");

    bookList.forEach(value => {

        value
            .split(" ")
            .forEach(key => {
                if(books[key] === undefined)
                    books[key] = [];

                books[key].push(value);
            });

    });

    console.log('put');

    for(const key in books)
        if(key.trim() != '')
            db.put(key, books[key].join(','));

    search();
};


const search = () => {
    console.log("search");

    db.createReadStream({
        gte: '프로그래밍'
    })
    .on("data", data => console.log(`${data.key} >> ${data.value}\n\n`));
};

scrape(1);