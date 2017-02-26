const client = require('cheerio-httpcli');

const url = 'http://jpub.tistory.com';
const param = {};

client.fetch(url, param, (err, $, res) => {
    if(err) { console.log('Error: ', err); return; }

    const body = $.html();
    console.log(body);
});
