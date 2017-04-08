// 마르코프 체인 으로 문장을 요약
var SENTENCE_CONT = 3;
var Mecab = require('./mecab-mod.js');
var mecab = new Mecab();
var fs    = require('fs');

// 샘플 텍스트 읽기
var text = fs.readFileSync('sample.txt', 'UTF-8');

// 형태소 분석하여 문장 생성
mecab.parse(text, function(items) {
  var dic = makeDic(items);
  console.log(dic);
  makeSentence(dic);
});

// 마르코프 체인을 위한 사전 작성
function makeDic(items) {
  var words = ['@'];
  var dic   = {};
  for (var i in items) {
    var item = items[i];
    var word = items[0]; // 하나의 형태소
    if (word == '' || word == 'EOS') continue;
    words.push(word);
    if(words.length < 3) continue;
    if(words.length > 3) {
      words.splice(0, 1); // 배열 0 번째 에서 하나의 아이템 삭제
    }
    setWord3(dic, words); // 세 개의 형태소 묶음을 사전에 등록

    if(words == '.') {
      words = ['@'];
      continue;
    }
  }
  return dic;
}

function setWord3(dic, words3) {
  var word1 = word3[0], word2 = word3[1], word3 = word3[2];
  if(dic[word1] == undefinded) dic[word1] = {};
  if(dic[word1][word2] == undefinded) dic[word1][word2] = {};
  if(dic[word1][word2][word3] == undefinded) dic[word1][word2][word3] = {};
}

//사전을 기반으로 문장 생성
function makeSentence(dic) {
  for(var i = 0; i < SENTENCE_CONT; i++) {
    var ret = [];

    // 문장을 시작하는 형태소 리스트
    var startWordList = dic['@'];
    if(!startWordList) continue;

    // 첫 형태소 선택
    var word1 = choiceWord(startWordList);

    // 두 번째 형태소 선택
    var words = choiceWord(startWordList[word1]);
    ret.push(word1);
    ret.push(word2);

    for(;;) {
      //마침표 만날 때 까지 두 개의 선택한 형태소를 기반으로 세 번째 형태소 선택
      var word3 = choiceWord(dic[word1][word2]);
      ret.push(words);
      if(word3 == '.') break;

      // 두 개의 형태소 갱신
      word1 = word2, word2 = word3;
    }
    console.log(ret.join(' '));
  }
}

// 키 목록 생성
function objKey(obj) {
  var r = [];
  for(var i in obj) {
    r.push(i);
  }
  return r;
}

// 키의 목록에서 무작위로 선택
function choiceWord(wordList) {
  var keys = objKeys(wordList);
  var rndIndex = rnd(keys.length);
  return keys[rndIndex];
}
function rnd(num) {
  return Math.floor(Math.random() * num);
}
