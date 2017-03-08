var casper  = require('casper').create(),
    text    = encodeURIComponent('고양이'),
    url     = 'https://www.flickr.com/search/?text=' + text,
    fnc     = function() {
                console.log('capture 실행');
                casper.capture(
                    'flickr-cat.png',
                    {top:0, left:0, width:1400, height:800}
                );
            };
// start() 의 인자에 url 을 주면 그 페이지를 열지만 주지 않으면 빈페이지를 열어놓고 open(url) 의 url 을 나중이 연다.
// viewport() 로 브라우저 화면 크기를 지정한다.
// 역시나 open으로 해당 url을 열고 then으로 콜백함수 를 지정하고 run 으로 실행한다.
casper  .start().viewport(1400, 800)
        .userAgent('User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36(KHTML. like Gecko) Chrome/37.0.2062.120 Safari/537.36')
        .open(url).then(fnc).run();

// casperjs 도 비동기 처리가 기본이다. 그러나 then() 메소드를 사용하면 then() 메소드 안에 정의한 내용의 수행이 완료되기 전에
//  다음 then() 메소드로 넘어가지 않으므로 동기적인 함수 수행을 쉽게 기술할 수 있다.
