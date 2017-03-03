const urlType = require('url');
const base = 'http://kujirahand.com/url/test/index.html';

const u1 = urlType.resolve(base, 'a.html');
console.log('u1 = ' + u1);

const u2 = urlType.resolve(base, '../b.html');
console.log('u2 = ' + u2);

const u3 = urlType.resolve(base, '/c.html');
console.log('u3 = ' + u3);
