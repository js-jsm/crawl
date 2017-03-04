const
    urlType = require("url"),   // URL모듈 로드
    base    = "http://kujirahand.com/ur/test/index.html",

    // 상대경로를 절대경로로 변환
    u1 = urlType.resolve(base, 'a.html'),
    u2 = urlType.resolve(base, '../b.html'),
    u3 = urlType.resolve(base, '/c.html');

console.log(`u1 = ${u1}`);
console.log(`u2 = ${u2}`);
console.log(`u2 = ${u3}`);
