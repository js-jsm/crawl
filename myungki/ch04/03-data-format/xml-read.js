const
    fs = require('fs'),
    cheerio = require('cheerio');

let xml = fs.readFileSync('news_00.xml', 'utf-8');

const $ = cheerio.load(xml, {xmlMode: true});

$('item').each(function(i, el){
    let title = $(this).children('title').text(),
        desc = $(this).children('description').text();

    console.log(title, desc);
    console.log('------------------------------');
});
