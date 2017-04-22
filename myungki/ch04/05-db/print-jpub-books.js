const
    BASE_URL = `http://jpub.tistory.com/category/${encodeURIComponent("제이펍의 도서")}`,
    PAGE_NUM = 6;
    client = require('cheerio-httpcli'),
    fs = require('fs'),
    urlType = require('url');

let booklist = [];

const scrap = page => {
    if (page > PAGE_NUM) {
        print();
        return ;
    }

    let VISIT_URL = `${BASE_URL}?page=${page}`;

    client.fetch(VISIT_URL, (err, $, res) => {
        if (err) { console.log("DL error"); return ; }

        let tr = $("#searchList > ol > li > span.list > a");

        if (!tr) {
            console.log("page type error");
            return ;
        }

        for (let i = 0; i < tr.length; i+=1) {
            let book = tr.eq(i).text();
            booklist.push(book);
        }

        scrap(page + 1);
    });
}

const print = _ => {
    for (let i in booklist) {
        console.log(booklist[i]);
    }
}

scrap(1);
