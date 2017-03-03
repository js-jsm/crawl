const urlType = require('url'),
      base    = 'http://kujirahand.com/url/test/index.html',
      u1      = urlType.resolve(base, './a.html'),
      u2      = urlType.resolve(base, '../b.html'),
      u3      = urlType.resolve(base, '/c.html');

console.log(u1, ' : u1');
console.log(u2, ' : u2');
console.log(u3, ' : u3');