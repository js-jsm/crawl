// 기상청 기상예보 RSS(cheerio-httpcli) for node.js

// 기상 RSS
var RSS = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';

// 모듈 로드
//node-modules에 있는 cheerio-httpcli모듈을 가지고와 client에 저장
var client = require('cheerio-httpcli');

// RSS 다운로드
client.fetch(RSS, {}, function(err, $, res) {
  if (err) {
    console.log('err : ' + err);
    return;
  }

  var city = $('location:nth-child(1) > city').text();
  console.log('city : ' + city);
  $('location:nth-child(1) > data').each(function(idx) {

    var tmEf = $(this).find('tmEf').text();
    var wf = $(this).find('wf').text();
    var tmn = $(this).find('tmn').text();
    var tmx = $(this).find(tmx).text();

  //  console.log(city + ' ' + tmEf + ' ' + wf + ' ' + tmn + '~' + tmx);
  });
});
