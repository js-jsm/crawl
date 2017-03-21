const API = 'http://api.aoikujira.com/kawase/get.php?code=USD&format=json';

const Request = require('request');
const fs = require('fs');
Request(API, (err, res, body) => {
  if(err || res.statusCode !== 200) return console.log(err);
  const result = JSON.parse(body);
  const krw = result['KRW'];

  const t = new Date();
  const fname = `${__dirname}/USD_KRW_${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}.txt`;
  const text = `$1 = ${krw}원`;
  fs.writeFile(fname, text);
});