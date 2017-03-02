const fs = require('fs');

console.log('mk dir start');

//async fs.mkdir
fs.mkdir('test', () => {
    console.log('create mk dir done.');
});
