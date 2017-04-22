const
    DB_DIR = `${__dirname}/leveldb-JPUB`,
    levelup = require('level'),
    db = levelup(DB_DIR),
    BASE_URL = `http://jpub.tistory.com/category/${encodeURIComponent("제이펍의 도서")}`,
    PAGE_NUM = 6,
    client = require('cheerio-httpcli'),
    fs = require('fs'),
    URL = require('url');

var booklist = [];

const scrape = page => {
    if (page > PAGE_NUM) {
        dbinsert();
        return;
    }

    let VISIT_URL = `${BASE_URL}?page=${page}`;

    // 사이트 방문
    client.fetch(VISIT_URL, (err, $, res) => {
        if (err) {
            console.log("DL error");
            return;
        }
        // 책 리스트 추출
        let tr = $("#searchList > ol > li > span.list > a");
        if (!tr) {
            console.log("페이지 형식 에러");
            return;
        }

        // 책 리스트 순회
        for (let i = 0; i < tr.length; i++) {
            let book = tr.eq(i).text();
            booklist.push(book);
        }
        scrape(page + 1);
    });
}

const dbinsert = _ => { // ---- ( ※ 1)
    let books = {};
    console.log("dbinsert");
    booklist.forEach((value, index, array) => {
        let words = value.split(" "); // 단어별로 분할--- (※2)

        for (let i in words) {
            let word = words[i],
                titles = books[word];

            if (titles == undefined) {
                books[word] = [];
            }
            books[word].push(value);
        }
    });

    console.log("put");
    for (let key in books) {
        let titles = books[key];
        db.put(key, titles.join("\n"));
    }

    search();
};

const search = _ => {
    console.log("search");
    var opt = {
        start: '프로그래밍',
        end: '프로그래밍\uFFFF'
    };

    db.createReadStream(opt).on("data", data => {
        console.log(`${data.key}>>${data.value}\n\n`);
    });
}

scrape(1);
