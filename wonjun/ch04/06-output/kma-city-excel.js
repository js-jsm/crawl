
var urlType = 'http://www.kma.go.kr/DFSROOT/POINT/DATA/top.json.txt';

var fs = require('fs');
var officegen = require('officegen');
var xlsx = officegen('xlsx');
var request = require('request');

request(urlType, function(err, res, body) {
  if (err) throw err;
  var list = JSON.parse(body);
  exportToExcel(list);
  console.log(list);
});

function exportToExcel(list) {
  var sheet = xlsx.makeNewSheet();
  sheet.name = '도시정보';

  sheet.data[0] = ['도시명', '코드'];

  for (var i = 0; i < list.length; i++) {
    var r = list[i];
    sheet.data[i + 1] = [r.code, r.value];
  }
  var strm = fs.createWriteStream('kma_city_codes.xlsx');
  xlsx.generate(strm);
  
}
