const client = require('cheerio-httpcli');
const URL = require('url');
const fs = require('fs');
const path = require('path');
const LINK_LEVEL = 3;
const TARGET_URL = "https://nodejs.org/api/";
const list = {};

function downloadRec(url, level) {
  if (level >= LINK_LEVEL) {
    return;
  }
  if (list[url]) {
    return;
  }
  list[url] = true;
  const us = TARGET_URL.split("/");
  us.pop();
  const base = us.join("/");
  if (url.indexOf(base) < 0) {
    return;
  }
  client.fetch(url, {}, (err, $, res) => {
    $("a").each((idx) => {
      const href = $(this).attr('href');
      if (!href) {
        return;
      }
      href = URL.resolve(url, href);
      href = href.replace(/\#.+$/, "");
      downloadRec(href, level + 1);
    });
    if (url.substr(url.length-1, 1) == '/') {
       url += "index.html";
    }
    const savepath = url.split("/").slice(2).join("/");
    checkSaveDir(savepath);
    console.log(savepath);
    fs.writeFileSync(savepath, $.html());
  });
}

function checkSaveDir(fname) {
  const dir = path.dirname(fname);
  const dirlist = dir.split("/");
  const p = "";
  for (const i in dirlist) {
    p += dirlist[i] + "/";
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p);
    }
  }
}

downloadRec(TARGET_URL, 0);