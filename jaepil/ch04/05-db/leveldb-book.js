var db_dir = 'leveldb-jpub',
    levelup = require('level'),
    db = levelup(db_dir),
    BASE_URL = 'http://jpub.tistory.com/category' + encodeURIComponent('제이펍의 도서'),
    PAGE_NUM = 1,
    
    client = require('cheerio-httpcli'),
    fs = require('fs'),
    urlType = require('url'),
    booklist = [];

scrape(1);

function scrape(page) {
    if(page > PAGE_NUM) {
        dbinsert();
        return;
    }

    var VISIT_URL = BASE_URL + "?page=" + page,
        tr;

    client.fetch(VISIT_URL, (err, $, res) => {
        if(err) {
            console.log('DL err');
            return;
        }

        tr = $('#searchList > ol > li > span.list > a');

        if(!tr) {
            console.log('페이지 형식 에러');
            return;
        }
        
        // console.log(tr.eq(0).text());
        tr.each(idx=> {
            booklist.push(tr.eq(idx).text());
        });

        scrape(page+1);
    });
}

function dbinsert() {
    
    let books = {},
        query = '';

    booklist.forEach((value, index, array) => {
        let words = value.split(' ')

        //console.log(words);
        words.forEach(word=>{
            word = word.replace(/(\[|\]|\_)/ig, ' ').replace(/\s/g, '');
            if(books[word]==undefined) {
                books[word] = [];
            }

            books[word].push(value);
        });

        Object.keys(books).forEach(key=> {
            db.put(key, books[key].join('\n'))
            console.log('key ::: ', key);
        })

        search();
    });
}

function search() {
    let opt = {
        start:'프로그래밍',
        end:'프로그래밍\uFFFF'
    };

    db.createReadStream(opt)
        .on('data', data => {
            console.log(data.key + '>>\n' + data.value + '\n');
        });
}

function deleteKey(key) {
    db.del(key, err=>{});
}