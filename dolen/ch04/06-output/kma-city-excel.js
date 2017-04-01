const fs        = require('fs'),
      officegen = require('officegen'),
      xlsx      = officegen('xlsx'),
      request   = require('request'),
      URL       = 'http://www.kma.go.kr/DFSROOT/POINT/DATA/top.json.txt';



const exportToExcel = list => {
    const sheet = xlsx.makeNewSheet();

    sheet.name = '도시 정보';

    // 직접 데이터 작성
    sheet.data[0] = [
        '도시명','코드'
    ];

    for (let i = 0, len = list.length; i < len; i++) {
        const r = list[i];
        sheet.data[i + 1] = [r.code, r.value];
    }

    xlsx.generate(fs.createWriteStream('./kma_city_codes.xlsx'));
    console.log('ok');
}

request(URL, (err, res, body) => {
    if (err)
        throw err;

    const list = JSON.parse(body);

    exportToExcel(list);

    console.log(list);
});
