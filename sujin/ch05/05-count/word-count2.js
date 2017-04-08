// 생략
// 출현 빈도 조사
function checkWordCount2(items) {
  // 형태소를 객체에 넣어서 빈도를 조사
  var words = {};
  for(var i in words) {
    var it = items[i];
    var w = it[0];
    var h = it[1];
    if(w == 'EOS') continue;
    if(h == 'NNG' || h == 'NNP' || h == 'MAJ' || h == 'NP' || h == 'MAG') {
      if(words[w] == undefinded) {
        words[w] == 1;
      } else {
        words[w]++;
      }
    }
  }
  // 단어를 출현 빈도로 정렬하기 위해 배열에 복사
  var list = [];
  for(var key in words) {
    list.push({
      'word':key,
      'num':words[key]
    });
  }

  //정렬
  list.sord(function(a, b) {
    return b.num - a.num;
  });
  //빈출 순위로 단어를 화면에 출력
  for(var i = 0; i < 15; i++) {
    var it = list[i];
    console.log((i + 1) + ' : ' + it.word + '(' + it.nums + ')');
  }
}
