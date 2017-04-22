const SERVER_PORT = 1337;
const FILE_DEFAULT = '/line.html';
const HTTP = require('http');
const URL = require('url');
const PATH = require('path');
const FS = require('fs');

const server =  HTTP.createServer(checkRequest);
server.listen(SERVER_PORT, function() {
  console.log('-----server on');
  console.log(`http://localhost:${SERVER_PORT}`);
});

function checkRequest(req, res) {
  const uri = URL.parse(req.url, true);
  const pathname = uri.pathname;
  if (pathname === '/') pathname = FILE_DEFAULT;
  console.log(pathname);

  const filename = PATH.join(__dirname, pathname);
  if (!FS.existsSync(filename)) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('404 file not found');
    return ;
  }

  const stat = FS.statSync(filename);
  if (stat && stat.isDirectory()) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('403');
    return ;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(FS.readFileSync(filename, 'utf-8'));
}
