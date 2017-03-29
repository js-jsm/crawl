Nodejs 는 파일을 쓸때 기본적으로 utf-8 을 지원한다.

fs.readFileSync 는 EUC-KR 을 지원하지 않는다.
- 외부 모듈을 이용해 해결가능

iconv-lite 자바스크립트로 구현된 문자코드 변환모듈

iconv 에 비해 상대적으로 많은 문자 코드를 지원하지 않지만 가볍고 빠르다.

[정규 표현식](http://regexr.com);

맥OS , 윈도우 둘다 좋아하시는분들은.. 책에서 나오는 iconv 예제 아니더라도 한번쯤 겪는 문제실탠데

npm이 c++ 컴파일러를 윈도우에서 2010~ 2013까지 사용해서 생기는 문제거든요

그렇다고 vb studio 2013 깔자니  귀찮고..

python 2.7 이랑 vb 2013 이 꼭 필요하지만

vb 는 무거우니까 대체할수 있는 방법이

https://www.npmjs.com/package/windows-build-tools
