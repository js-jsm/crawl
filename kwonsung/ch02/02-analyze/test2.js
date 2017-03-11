const fs = require('fs');
const stream = fs.createReadStream('./test.html');
stream.on('data', data => console.dir(data));

stream.on('end', () => console.log('all parts is loaded'));

stream.on('error', err => console.error(err));