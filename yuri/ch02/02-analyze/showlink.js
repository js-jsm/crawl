var client = require('cheerio-httpcli');

var url = "http://jpub.tistory.com";
var param = {};
client.fetch(url,param, function (err,$,res) {
    if(err){
        console.log("error");
        return;
    }
    $("a").each(function (idx) {
        var text = $(this).text();
        var href = $(this).attr("href");
        console.log(text +":"+ href);
    })
});
