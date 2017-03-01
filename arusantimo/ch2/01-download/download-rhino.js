const aUrl = new java.net.URL("http://jpub.tistory.com/");
const conn = aUrl.openConnection();
const ins = conn.getInputStream();
const file = new java.io.File("test.html");
const out = new java.io.FileOutputStream(file);
const b;
while ((b = ins.read()) != -1) {
    out.write(b);
}
out.close();
ins.close();