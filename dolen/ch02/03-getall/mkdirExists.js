const fs = require('fs');

console.log('mk dir start');

if(!fs.existsSync('test-sync'))
    fs.mkdirSync('test-sync');

console.log('mk dir done.');