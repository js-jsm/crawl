var fs = require('fs');
// 비동기 함수의 대표적인 예> mkdir()
console.log('mkdir 실행');

fs.mkdir('test', function() {
    console.log('폴더 생성 완료');
});

console.log('mkdir 실행 완료. 결과 대기');
// 실행결과 : mkdir() 함수가 비동기로 처리되기 때문에
// mkdir() 의 두번째 매개변수인 function 은
// mkdir() 함수의 처리가 모두 종료된 후 실행된다.

// 결과
// mkdir 실행
// mkdir 실행 완료. 결과 대기
// 폴더 생성 완료
