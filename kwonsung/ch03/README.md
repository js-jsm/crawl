* [뷰포트](http://m.mkexdev.net/34)  
디스플레이의 영역?  
한 번에 얼만큼을 보여줄지?  
스마트 기기와 PC의 화면 크기(뷰포트)가 다르다.  
* 사용자 에이전트(User agent)  
[User agent](https://en.wikipedia.org/wiki/User_agent)  
> In computing, a user agent is software (a software agent) that is acting on behalf of a user. One common use of the term refers to a web browser telling a web site information about the browser and operating system.  
> 발번역 해보자면 사용자 에이전트는 사용자를 대신하는 소프트웨어(소프트웨어 에이전트)입니다. 가장 흔히 사용되는 경우로 웹 사이트를 도와주는 소프트웨어로 사용되는 웹 브라우저가 있다.</blockquote>  

위 링크를 보면 사용자 에이전트에도 여러 종류가 많은 것 같다. (사용자가 어떠한 서비스를 이용하는지에 따라서)  
하지만 대부분 사용자 에이전트가 필요한 서비스는 웹이 대부분인 것 같아  
브라우저 === 유저 에이전트와 같이 인식되는 것 같다.  
* encodeURIComponent  
컴퓨터는 미국에서 만들었다.
인터넷도 미국에서 만들었다.
따라서 인터넷은 미국인 친화적(알파벳, 숫자 등등)이다.
아래와 같은 문자들의 집합을 사용한다.  
[ASCII Character Set](https://www.w3schools.com/charsets/ref_html_ascii.asp)  
인터넷의 하나의 요소인 URL(웹 사이트의 주소)도 마찬가지다.
한글을 표현하지 못한다.
그럼 한글과 같은 비 ASCII 문자들은 어떻게 표현해야할까?  
바로 [퍼센트 인코딩](https://ko.wikipedia.org/wiki/%ED%8D%BC%EC%84%BC%ED%8A%B8_%EC%9D%B8%EC%BD%94%EB%94%A9)이라고 부르는 것으로 그러한 문자들을 변환한다.  
퍼센트 인코딩은 한글과 같은 문자를 일종의 규칙을 거쳐 ASCII 코드에 존재하는 문자열로 변환한 것이다.  
고 -> %EA%B3%A0  
노드.js에서 이런 일반 문자 -> 퍼센트 인코딩으로 변환해서 출력해주는 함수가 encodeURIComponent 요 놈이다.  
사실 퍼센트 인코딩은 문자열 -> UTF8 인코딩 -> 1바이트 마다 %를 구분자로 추가.  
자세한 내용은 16진수, 1바이트, UTF8을 키워드로 열심히 찾아보시길 바랍니다.  
