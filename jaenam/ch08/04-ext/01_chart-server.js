const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const checkRequest = (req, res) => {
    const uri = url.parse(req.url, true);
    const fileName = path.join(__dirname, uri.pathname !== '/' ? uri.pathname : '/line.html');
    console.log(fileName);
    if(!fs.existsSync(fileName)) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 file not found');
        return;
    }

    const stat = fs.statSync(fileName);
    if(stat && stat.isDirectory()) {
        res.writeHead(403, { 'Content-Type': 'text/html' });
        res.end('403');
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(fileName, 'utf-8'));
};
const svr = http.createServer(checkRequest);
svr.listen(1337, () => {
    console.log('서버가 실행중입니다.');
    console.log('http://localhost:1337');
});
