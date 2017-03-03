const client      = require('cheerio-httpcli'),
      RSS         = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';


client.fetch(RSS, {}, (err, $) => {
    if(err)
        return;

    const city = $('location:nth-child(1) > city').text();

    $('location:nth-child(1) > data').each((i, tag) => {
        const $this = $(tag),
              tmEf  = $this.find('tmEf').text(),
              wf    = $this.find('wf').text(),
              tmn   = $this.find('tmn').text(),
              tmx   = $this.find('tmx').text();

        console.log(`
            ${city} ${tmEf} ${wf} ${tmn} ${tmx}
        `);
    });
});