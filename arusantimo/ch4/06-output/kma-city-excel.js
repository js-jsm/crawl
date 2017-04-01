const URL = "http://www.kma.go.kr/DFSROOT/POINT/DATA/top.json.txt";
const fs = require('fs');
const officegen = require('officegen');
const xlsx = officegen('xlsx');
const request = require('request');

request(URL, (err, res, body) => {
  if (err) throw err;
  const list = JSON.parse(body);
  exportToExcel(list);
  console.log(list);
});

function exportToExcel(list) {
  const sheet = xlsx.makeNewSheet();
  sheet.name = "도시 정보";
  sheet.data[0] = [
    "도시명","코드"
  ];
  for (let i = 0; i < list.length; i++) {
    const r = list[i];
    sheet.data[i + 1] = [r.code, r.value];
  }
  const strm = fs.createWriteStream('kma_city_codes.xlsx');
  xlsx.generate(strm);
  console.log("ok");
}
