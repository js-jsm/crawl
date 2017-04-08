var client   = require('cheerio-httpcli'),
    fs       = require('fs'),
    URL      = require('url'),
    sqlite3  = require('sqlite3').verbose(),
    db       = new sqlite3.Database(`${__dirname}/jpub.sqlite`),
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

const insert = () => {
    db.serialize(() => {
        db.run(
            `CREATE TABLE 
                IF NOT EXISTS book(
                    id INTEGER PRIMARY KEY,
                    token TEXT
                )
            `
        );

        const pstmt = db.prepare(`INSERT INTO book (token) VALUES(?)`);

        bookList.forEach(value => value.split(' ').forEach(str => pstmt.run(str)));

        pstmt.finalize();

        console.log('집계 결과');

        db.each(`
            SELECT 
                token, 
                COUNT(token) as cnt 
            FROM book 
            GROUP BY token 
            having cnt > 3 
            ORDER BY cnt DESC
        `, (err, row) =>  console.log(`${row.cnt} 회: ${row.token}`));
    });
};

scrape(1);