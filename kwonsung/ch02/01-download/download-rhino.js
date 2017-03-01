const url = 'http://jpub.tistory.com/';
const savepath = 'test-rhino.html';

const aUrl = new java.net.URL(url);
const conn = aUrl.openConnection();
const ins = conn.getInputStream();
const file = new java.io.File(savepath);
const out = new java.io.FileOutputStream(file);

let b;
while((b = ins.read()) != -1) {
  out.write(b);
}

out.close();
ins.close();