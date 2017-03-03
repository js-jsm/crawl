const request = require('request'),
      fs      = require('fs'),
      API     = 'http://api.aoikujira.com/kawase/get.php?code=USD&format=json';

request(API, (err, res, body) => {
    if(err || res.statusCode != 200)
        return;

    const r     = JSON.parse(body),
          krw   = r['KRW'],
          t     = new Date(),
          fname = `USD_KRW_${t.getFullYear()}-${t.getMonth() + 1}-${t.getDay()}.txt`,
          text  = `lusd=${krw}krw`;

    fs.writeFile(fname, text);
});