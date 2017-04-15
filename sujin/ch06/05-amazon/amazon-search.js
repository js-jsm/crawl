// 모듈 로드
var amazon = require('amazon-product-api');
// 계정 정보 입력
var client = amazon.createClient({
  awsId: '',
  awsSecret: '',
  awsTag:''
});

clinet.itemsSearch({
  SearchIndex:'Books',
  keywords:'Harry Potter',
  Author:'J. K. Rowling'
}).then(function(results) {
  for(var i in results) {
    var item = results[i];
    var attrs = item.ItemAttributes[0];
    for(var attr in attrs) {
      console.log(attr + ' : ' + attrs[attr]);
    }
    console.log('--------------------')
  }
}).catch(function(err) {
  console.log(JSON.stringify(err));
});
