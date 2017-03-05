const API_URL = "http://api.aoikujira.com/kawase/get.php?code=USD&format=json";
const request = require('request');
const fs = require('fs');

request(API_URL, (err, response, body) => {
  if (err || response.statusCode != 200) {
    console.error("ERROR", err);
    return;
  }
  const r = JSON.parse(body);
  const krw = r["KRW"];
  const t = new Date();
  const fname = `USD_KRW_${t.getFullYear()}-${(t.getMonth()+1)}-${t.getDate()}.txt`;
  const text = `1usd=${krw}krw`;
  console.log(text);
  fs.writeFile(fname, text);
});