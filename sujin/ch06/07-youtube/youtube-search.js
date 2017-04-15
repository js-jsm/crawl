// YouTube 검색 for Node.js

var Youtube = require('youtube-node');
var youtube = new Youtube();

//API키 지정
youtube.setKey('');
// 검색 수행
var keyword = '고양이';
var limit = 3;
youtube.search(keyword, limit, function(err, result) {
  if(err) {
    console.log(err);
    return;
  }
  //결과 표시
  console.log(JSON.stringify(result, null, 2));
});
