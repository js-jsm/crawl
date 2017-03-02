const urlType = require('url');

const base = 'http://jpub.tistory.com/test/bbb/';
const url = [
  urlType.resolve(base, 'a.html'),
  urlType.resolve(base, '../b.html'),
  urlType.resolve(base, '/index.html'),
  urlType.resolve(base, './bcd/qqa.html')
];

url.forEach(v => console.log(v));
