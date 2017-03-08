//node_modules에서 cheerio-httpcli 모듈을 가져와 client에 저장
// 이 모듈이 $을 제공한다. -> 맞는건가?
var client = require('cheerio-httpcli');

var url = 'http://jpub.com';

//비어있는 맵, 비어있는 객체를 넣어준다.
var param = {};

client.fetch(url, param, function (err, $) {
    if (err) {
      //console.log('error : ' + err);
      return;
    }

    // jsp에서의 foreach 같은 것
    //a태그를 가져와서 a태그 갯수 만큼 반복한다.
    $('a').each(function(idx) {
      var thisa = $(this);
      var text = $(this).text();
      var href = $(this).attr('href'); //a태그에 있는 속성
      //console.log(href); //href : 주소 나옴
      //console.log(thisa); // this : 해당 페이지의 태그
      console.log(text); // 그 해당 페이지의 값
      //console.log(text + ':' + href);
    });
  }
);
// $('a') => 241개의 a태그 선택됨
// $('a').each => item : $('a')[index]
// text는 this의 text를 가져온다.
