const PORT = 1337;
const FILE_CLIENT = 'chat-client.html';

const http = require('http');
const url = require('url');
const fs = require('fs');
const bot = require('./chat-server-bot');

const apiRequest = (req, res, uri) => {
    const msg = uri.query.msg;
    bot.getResponse(msg, botMsg => {
        const body = JSON.stringify({msg: botMsg});
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(body);
    });
};

const checkRequest = (req, res) => {
    const uri = url.parse(req.url, true);
    const pathName = uri.pathname;
    console.log(pathName);

    switch(pathName) {
    case '/api':
        apiRequest(req, res, uri);
        break;
    case '/':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(fs.readFileSync(FILE_CLIENT, 'utf-8'));
        break;
    default:
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('FILE NOT FOUND!');
        break;
    }
};

const svr = http.createServer(checkRequest);
svr.listen(PORT, ()=> {
    console.log(`서버 실행 완료 - http://localhost:${PORT}`);
});
