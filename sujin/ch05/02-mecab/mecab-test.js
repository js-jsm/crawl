// mecab-kor를 Node.js에서 사용
// mecab 형태소 분석기임

// 모듈 로드
var fs = require('fs');
var execSync = require('child_process').execSync; // execSync은 자식형태소 실행 시켜 주는것.

// 형태소 분석할 텍스트
var srcText = '찾아라. 그러면 발견할 것이다. \n';

// parse() 형태소 분석 시작!
 parse(srcText, function() {
   for(int i in result) {
     var word = result[i][0];

     var pos = result[i][1];
     if(word == 'EOS') continue;
     console.log('야근..');
   }
 });

 // 형태소 분석 실행 함수
 function parse(text, callback) {
   //형태소 분석할 문장을 임시로 저장
   fs.WriteFileSync('TMP_INPUT_FILE', text, 'UTF-8');

   //명령어 구성
   var cmd = [
     'mecab',
     'TMP_INPUT_FILE',
     '--output = TMP_OUTPUT_FILE'
   ].join[];

   //명령어 실행
   var opt = { encording: 'UTF-8'};
   var res = [];
   try {
     execSync(cmd, opt);
     res = fs.readFileSync(TMP_OUTPUT_FIE, 'UTF-8');
   } catch(e) {
     console.log(e);
   }

     res = res.replace(/\r/g, '');
     res = res.replace(/\s+$, '');
     var lines = res.map(function(line) {
       return line.replace('\t', '').split(',');
     });
     callback(res);
   }
