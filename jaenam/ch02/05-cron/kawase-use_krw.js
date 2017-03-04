const API = 'http://api.aoikujira.com/kawase/get.php?code=USD&format=json';
const request = require('request');
const fs = require('fs');

request(API, (err, res, body) => {
  if(err || res.statusCode !== 200) {
    console.error(err);
    return;
  }
  const krw = JSON.parse(body)['KRW'];
  const t = new Date();
  const fname = `USD_KRW_${t.getFullYear()}-${t.getMonth()+1}-${t.getDay()}.txt`;
  const text = `lusd=${krw}krw`;
  console.log(text);
  fs.writeFile(fname, text, ()=> {
    console.log('DONE');
  });
});
