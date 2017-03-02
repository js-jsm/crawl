>최대한 비동기적인 처리 문법을 이용한다.

# 2장 웹데이타수집

## fs모듈 (file system)
파일을 다룰때 사용되어 진다.

```js
fs.readFile('text.txt', 'utf8', function(err, data) {
  console.log(data);
  // text.txt가 비동기적으로 출력된다.
});

fs.writeFile('text.txt', data, 'utf8', function(err) {
  console.log('비동기적 파일 쓰기 완료');
  // text.txt에 data가 비동기적으로 입력된다.
});
```

## http 모듈
노드의 웹모듈 http서버를 생성하고 그와 관련된 모든 기능들을 담당
server객체를 가지고 있어 서버를 생성할 수 있다.
```js
var server = http.createServer();
server.listen(5000);
server.close();
```
파일 시스템을 이용한 스테틱페이지출력 서버 생성
```js
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
  fs.readFile('index.html', function (error, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
});
server.listen(5000, function () {
  console.log('Server Running...');
});
```
request, response 객체가 존재한다. 일반적인 서버프레임워크와 비슷하다. 개인적으로는.

## cheerio-httpcli
스크래필할때 jquery 식으로 DOM 파싱 요소 추출하는데 사용되어지는 유틸리티
```js
const client = require('cheerio-httpcli');
client.fetch("http://naver.com", {}, (err, $, res) => {
  $("a").each((idx) => {
    const text = $(this).text();
    console.log(text);
  });
});)
//엑셀에 스크래핑한 데이타 저장
var officegen = require('officegen');
var xlsx = officegen('xlsx');
var fs = require('fs');
var url = "https://search.naver.com/search.naver?where=post&sm=tab_pge&query=%EC%84%B1%ED%98%95%EC%99%B8%EA%B3%BC&st=sim&date_option=0&date_from=&date_to=&dup_remove=1&post_blogurl=&post_blogurl_without=&srchby=all&nso=&ie=utf8&start=1";
var param = {};

client.fetch(url, param, function(err, $, res){
  if(err){console.log("error:", err); return;}
  var body = $.html();
  var re = /성형/g;
  var found = body.match(re);
  console.log(found.length);
});

client.fetch(url, param, function(err, $, res){
  if(err){
    console.log("error:", err);
    return;
  }
  var body = $.html();
  var list_dl = $(".sh_blog_passage");
  var list = [];
  for (var i = 0 ; i < list_dl.length ;i++){
    var value = $(list_dl[i]).html();
    console.log(value);
    list.push(value);
  }
  exportToExcel(list);
});

function exportToExcel(list){
  var sheet = xlsx.makeNewSheet();
  sheet.name = "test";
  for (var i = 0 ; i < list.length ;i++){
    var value = list[i];
    console.log(value);
    sheet.setCell('a' + i+1, value);
  }
  var strm = fs.createWriteStream('c:/practice/node_crolling_02/test.xlsx');
  xlsx.generate(strm);
}
```