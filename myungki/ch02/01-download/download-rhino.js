// url에 있는 파일을 savepath에 다운로드 한다.
const
    url = "http://jpub.tistory.com/",
    savepath = "test-rhino.html";

// 다운로드
const
    aUrl = new java.net.URL(url);
    conn = aUrl.openConnection(),   // url에 접속
    ins = conn.getInputStream,      // 입력스트림을 획득
    file = new java.io.File(savepath), // 출력 스트림을 획득
    out = new java.io.FileOutputStream(file);

// 입력할 스트림을 읽으면서 출력스트림에 쓴다.
let b;
while ( (b = ins.read()) !=  -1) {
    out.write(b);
}
out.close();    // 출력 스트림을 닫는다.
ins.close();    // 입력 스트림을 닫는다.
