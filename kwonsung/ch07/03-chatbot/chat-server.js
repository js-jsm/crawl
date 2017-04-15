const SERVER_PORT = 1337;
const FILE_CLIENT = 'chat-client.html';

const http = require('http');
const urlType = require('url');
const path = require('path');
const fs = require('fs');
const bot = require('./chat-server-bot.js');

const apiRequest = (req, res, uri) => {
  const msg = uri.query.msg;
  bot.getResponse(msg, bot_msg => {
    const body = JSON.stringify({"msg": bot_msg});
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(body);
  });
};

const checkRequest = (req, res) => {
  const uri = urlType.parse(req.url, true);
  const pathname = uri.pathname;
  console.log(pathname);

  if(pathname === '/api') apiRequest(req, res, uri);
  else if(pathname === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(fs.readFileSync(FILE_CLIENT, 'utf-8'));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('File not found');
  }
  console.log(pathname);
};

const svr = http.createServer(checkRequest);
svr.listen(SERVER_PORT, () => {
  console.log('서버 실행 완료');
  console.log(`http://localhost:${SERVER_PORT}`);
});