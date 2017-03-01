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


