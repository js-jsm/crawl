// RSS? --> 뉴스아 블로그 등 각종 웹사이트의 갱신 정보를 요약하여
// 전송할 때 사용한 데이터 형식임.

// 기상청 예보
//RSS를 웹에서 취득하고있는중..
var RSS = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';

 // 모듈 로드
var parseString = require('xml2js').parseString;
var request = require('request');

// RSS 다운로드
//request는 요청하는건가?!, require은 가져오는거같은데
//request모듈의 request() 사용한다.
//RSS를 요청하고 콜백 함수로 넘어온 response가 statusCode가 200이면
request(RSS, function(err, response, body) {
  // err가 없고 200(성공)이 나온다면..!
  if (!err && response.statusCode == 200) {
    analyzeRSS(body);
  }
});

// RSS해석
// 위에서 데이터를 얻었다면 analyzeRSS()호출함
function analyzeRSS(xml) {
  // xml을 JS 오브젝트로 변환
  //xml2js모듈의 parseString()메소드 사용 하여 xml데이터를 자바스크립트객체로 변환
  parseString(xml, function(err, obj) {
    if (err) {
      console.log(err);
      return;
    }
    //기상 예보 정보 출력
    //console.log(JSON.stringify(obj)); --> 자바스크립트 객체를 보고 싶다면 JSON.stringify()메소드로 객체를 JSON오로 출력해서 보면됨
    var datas = obj.rss.channel[0].item[0].description[0].body[0].location[0].data;
    var city = obj.rss.channel[0].item[0].description[0].body[0].location[0].city;

    //자바스크립트로 변환한 날씨 정보를 for문으로 돌린다.
    for(var i in datas) {
      var data = datas[i];
      console.log(city + ' ' + data.tmEf + ' ' + data.wf + ' ' + data.tmn + '~' + data.tmx);
    }
  });
}
