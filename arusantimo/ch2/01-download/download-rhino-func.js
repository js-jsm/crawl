function download(url, savepath) {
  var aUrl = new java.net.URL(url);
  try {
    var conn = aUrl.openConnection();
    var ins = conn.getInputStream();
    var file = new java.io.File(savepath);
    var out = new java.io.FileOutputStream(file);
    var b;
    while ((b = ins.read()) != -1) {
      out.write(b);
    }
    out.close();
    ins.close();
  } catch (e) {
    throw new Error(e);
  }
}
download("http://jpub.tistory.com/539", "spring.html");
download("http://jpub.tistory.com/537", "angular.html");
print("ok");