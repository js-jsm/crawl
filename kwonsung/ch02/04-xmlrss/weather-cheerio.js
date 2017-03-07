const RSS = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';

const client = require('cheerio-httpcli');

client.fetch(RSS, null, (err, $, res) => {
  if(err) return console.log(err);

  console.log(res);
  const city = $('location:nth-child(1) > city').text();
  $('location:nth-child(1) > data').each(function() {
    const tmEf = $(this).find('tmEf').text();
    const wf = $(this).find('wf').text();
    const tmn = $(this).find('tmn').text();
    const tmx = $(this).find('tmx').text();

    console.log(`${city} ${tmEf} ${wf} ${tmn}~${tmx}`);
  })
});