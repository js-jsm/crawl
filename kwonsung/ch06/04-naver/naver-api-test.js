const https = require('https');
const parseString = require('xml2js').parseString;
const {client_id, client_secret} = require('../config.json').naver;

const KEYWORD = '주꾸미';

const HOST = 'openapi.naver.com';
const PORT = 443;
const URI = '/v1/search/blog.xml?query=' + encodeURIComponent(KEYWORD);

const options = {
  host: HOST, port: PORT, path: URI,
  method: 'get',
  headers: {
    'X-Naver-Client-Id': client_id,
    'X-Naver-Client-Secret': client_secret
  }
};

let result = '';

const req = https.request(options, res => {
  res.setEncoding('utf8');
  res.on('data', chunk => result += chunk);
  res.on('end', () => {
    parseString(result, (err, pStr) => {
      const items = pStr.rss.channel[0].item;
      for(const key in items) {
        console.log(`user: ${items[key].bloggername[0]}`);
        console.log(`title: ${items[key].title[0]}`);
        console.log(`desc: ${items[key].description[0]}`);
        console.log(`-----------------------------------`);
      }
    });
  });
});

req.end();