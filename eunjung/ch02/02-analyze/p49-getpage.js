// 스크래핑 : 웹사이트에서 html 데이터를 수집, 추출, 가공하여 저장하는 것.
// cheerio-httpcli 모듈
//    (1) 파일을 손쉽게 다운로드
//    (2) 요소를 jQuery와 비슷하게 획득 가능
//    (3) 웹 페이지의 문자 코드를 자동으로 판정하여 읽어줌
//    (4) 페이지의 데이터를 꺼낼 때 지정한 요소를 간편하게 추출 가능
// 모듈 로드
var client = require('cheerio-httpcli');

// 다운로드
var url = 'http://jpub.tistory.com';
var param = {};

client.fetch(url, param, function(err, $, res) {
    if(err) {
        console.log('Error : ', err);
        return;
    }

    // 다운로드한 결과를 화면에 출력
    var html = $.html();
    console.log(html);

});
