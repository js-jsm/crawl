const RSS = "http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109";
const client = require('cheerio-httpcli');
client.fetch(RSS, {}, (err, $, res) => {
  if (err) {
    console.log("error");
    return;
  }
  const city = $("location:nth-child(1) > city").text();
  $("location:nth-child(1) > data").each(function(idx) {
    const tmEf = $(this).find('tmEf').text();
    const wf = $(this).find('wf').text();
    const tmn = $(this).find('tmn').text();
    const tmx = $(this).find('tmx').text();
    console.log(`${city} ${tmEf} ${wf} ${tmn}~${tmx}`);
  });
});