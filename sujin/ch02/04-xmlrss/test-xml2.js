// 모듈 로드
//node-module에서 xml2js 모듈을 가지와 parseString에 접근 -> 지정한 변수 parseString에 저장
var parseString = require('xml2js').parseString;

// 테스트용 xml 데이터
var xml = "<fruits shop='AAA'>" +
    "<item price = '140'>Banana</item>" +
    "<item price = '120'>Apple</item>" +
    "</fruits>";

// xml을 전달
parseString(xml, function (err, result) {
  //console.log(JSON.stringify(result));

  //fruits을 제공하는 가게이름
  var shop = result.fruits.item;
  //console.log('shop = ' + shop);

  //fruits의 이름과 가격 표시
  var items = result.fruits.item;
  for(var i in items) {
    var item = items[i];
    //console.log('item : ' + item);
      //console.log('--name : ' + item._); --name : Banana / --name : Apple
    console.log('  price : ' + item.$.price); //item에서 $ 접근해서 price가져온다...망할하나도모르겠네.
  }
});
