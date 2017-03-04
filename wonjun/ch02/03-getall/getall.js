const client = require('cheerio-httpcli');
const request = require('request');
const urlType = require('url');
const fs = require('fs');
const path = require('path');

const LINK_LEVEL = 3;
const TARGET_URL = 'http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/';
let list = {};

downloadRec(TARGET_URL, 0);

function downloadRec(url, level) {
  if (level >= LINK_LEVEL) return;

  if (list[url]) return;

  list[url] = true;

  let us = TARGET_URL.split('/');
  us.pop();
  let base = us.join('/');
  if (url.indexOf(base) < 0) return;

  client.fetch(url, {}, function(err, $, res) {
    $('a').each(function(idx) {
      let href = $(this).attr('href');
      if (!href) return;

      href = urlType.resolve(url, href);

      href = href.replace(/\#.+$/, '');
      downloadRec(href, level + 1);
    });

    if (url.substr(url.length - 1, 1) == '/') {
      url += 'index.html';
    }

    const savepath = url.split('/').slice(2).join('/');
    checkSaveDir(savepath);
    fs.writeFileSync(savepath, $.html());
  });
}

function checkSaveDir(fname) {
  const dir = path.dirname(fname);
  const dirlist = dir.split('/');
  let p = '';
  for (var i in dirlist) {
    p += dirlist[i] + '/';
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p);
    }
  }
}
