
//node-modules에서 cheerio-httpcli과 request, fs, url 모듈을 가지고와 변수로 지정한  곳에다가 저장한다.
var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var urlType = require('url');

// 저장할 디렉토리가 없으면 생성
// __dirname는 node에선 절대경로(node를 실행한 경로가 절대 경로)로 리턴
// 경로에대가 img라는 폴더를 만들어 그것을 savedir에 저장을 한다
var savedir = __dirname + '/img';
//만약 fs에서 existsSync에 savedir을 넣고 false이면(존재 하지 않으면)
if(!fs.existsSync(savedir)) {
  //fs에서 mkdirSync함수를 실행하여 디렉터리를 생성한다.
  fs.mkdirSync(savedir);
}

//url 지정
          //wiki의                         강아지에 관한 페이지 추출..?
var url = 'https://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지');
var param = {};

// HTML 파일획득
client.fetch(url, param, function(err, $) {
  if(err) {
    console.log('error : ' + err);
    return;
  }
  //img 링크 추출하여 그 것에 대한 반복문 실행
  $('img').each(function(idx) {
    var src = $(this).attr('src');
    //console.log('$ : ' + $);
    //console.log('src : ' + src);
    //상대 경로를 절대 경로로 변환 하기
    src = urlType.resolve(url, src);

    //파일 이름 지정
    var fname = urlType.parse(src).pathname;
    fname = savedir + '/' + fname.replace(/[^a-zA-Z0-9]+/g, '_');

    //다운로드
    request(src).pipe(fs.createWriteStream(fname));
  });
});
