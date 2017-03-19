const yaml = require('js-yaml'),
      fs   = require('fs'),
      txt  = fs.readFileSync('test.yml', 'utf-8'),
      obj  = yaml.safeLoad(txt);

// 과일 가격 표시
for (var {name, price} of obj.items)
  console.log(name, price);