const fs      = require('fs'),
      cheerio = require('cheerio'),
      xml     = fs.readFileSync('./news_00.xml', 'utf-8'),
      $       = cheerio.load(xml, {
        xmlMode: true
      });

$('item').each(function(i, el){
  var title = $(this).children('title').text();
  var desc = $(this).children('description').text();
  console.log(title);
  console.log(desc);
  console.log('--------------------------');
});