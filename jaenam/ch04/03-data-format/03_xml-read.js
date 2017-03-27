const fs = require('fs');
const cheerio = require('cheerio');
const xml = fs.readFileSync('news__0.xml', 'utf-8');
const $ = cheerio.load(xml, { xmlMode: true });
$('item').each(function(i, el) {
    const title = $(el).children('title').text();
    const desc = $(el).children('description').text();
    console.log(title);
    console.log(desc);
    console.log('----------------------');
});
