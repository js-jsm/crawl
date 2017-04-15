// 채팅 봇을 위한 키워드 사전
//---------------------------------------------------
// 사전 텍스트 파일 지정
var FILE_DIC =  'bot-dic.dat';
// MongoDB 접속 정보
var MONGO_DSN = 'mongodb://localhost:27017/simple-bot';
var mongo_db; // 접속 개체

// 모듈 로드
var mongo_client = require('mongodb').MongoClient;
var fs = require('fs');

// MongoDB 연결
mongo_client.connect(MONGO_DSN, function (err, db) {
  // 에러 체크
  if (err) {
    console.log('DB error');
    return;
  }
  //MongoDB
  mongo_db = db;

  // 컬렉션 취득
  var collection = db.collection('keywords');

  // 기존 데이터 있으면 초기화
  collection.drop(function(err, reply) {
    //초기화 후 데이터 삽입
    insertKeywords(collection);
  });
});

// 망고디비에 데이터 삽입
function insertKeywords(collection) {
  var cnt = 0, dataCount = 0;

  // 텍스트 데이터 읽기
  var txt = fs.readFileSync(FILE_DIC, 'utf-8');

  // 라인별 처리
  var lines = txt.split('\n');
  for(var i in lines) {
    var line = trim(lines[i]);
    if(line == '') continue; // 빈라인
    if(line.substr(0,1) == '') continue; //주석

    var cells = line.split(',');
    var key = trim(lines[i]);
    var rank = parseInt(trim(cells[1]));
    var pat = trim(cells[2]);
    var msh = trim(cells[3]);

    // 삽입
    collection.insert({
      'key': key, 'rank' : rank,
      'pattern' : pat, 'msg' : msg
    }, function(err, result) {
      console.log(cnt + ':inserted:', result.ops);
      if(++cnt == dataCount) {
        console.log('done');
        mongo_db.close();
      }
    });
    dataCount++;
  }
}

// 전 후 공백 없애기
function trim(s) {
  s = ' ' + s;
  return s.replace(/(^\s|\s+$)/g, '');
}
