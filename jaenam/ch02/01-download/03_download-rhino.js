// url에 있는 파일을 savepath에 다운로드한다.
const url = 'http://jpub.tistory.com/';
const savepath = 'test.html';


// 다운로드
const aUrl = new java.net.URL(url);

const conn = aUrl.openConnection(); // url에 접속
const ins = conn.getInputStream(); // 입력 스트림 획득

const file = new java.io.File(savepath); // 출력 스트림을 획득
const out = new java.io.FileOutputStream(file);


// 입력 스트림을 읽으면서 출력 스트림에 쓴다.
let b;
while ((b = ins.read()) != -1) {
    out.write(b);
}
out.close(); // 출력 스트림을 닫는다.
ins.close(); // 입력 스트림을 닫는다.
