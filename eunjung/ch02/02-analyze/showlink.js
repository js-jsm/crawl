// <HTML 파일에서 링크 추출>
// 모듈 로드
var client = require('cheerio-httpcli');

// 다운로드
var url = 'http://jpub.tistory.com';
var param = {};

// 매개변수로 넘어간 $ 인자를 통해 jQuery처럼 페이지의 특정 요소를 추출할 수 있음
client.fetch(url, param, function(err, $, res) {
      if(err) {
        console.log('Error : ', err);
        return;
      }

      console.log($);

      // each(cbf) : 요소의 모든 항목을 순회하며 cbf 을 실행한다.
      // $ 객체의 html 중 'a' 태그 를 모두 가져와 each() 함수를 통해
      // 모두 순회하며 매개변수로 지정된 함수를 실행한다.
      $('a').each(function(idx) {
        // 여기서의 this 는 추출된 a태그.

        // console.log('순회중.. idx : ' + idx + ' / this : ' + $(this));
        //    --> 실행시 해당 페이지의 모든 <a> 태그 출력됨
        var text = $(this).text();
        var href = $(this).attr('href');
        console.log(text + ':' + href);
      });
  }
);
