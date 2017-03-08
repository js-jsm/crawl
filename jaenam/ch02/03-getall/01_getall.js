const client = require('cheerio-httpcli');
const request = require('request');
const urlType = require('url');
const fs = require('fs');
const path = require('path');

const LINK_LEVEL = 3;
const TARGET_URL = 'https://nodejs.org/api/';
const list = {};

const downloadRec = (url, level) => {
  if(level >= LINK_LEVEL) return;
  if(list[url]) return;
  list[url] = true;
  const us = TARGET_URL.split('/');
  us.pop();
  const base = us.join('/');
  if(url.indexOf(base) < 0) return;

  client.fetch(url, {}, (err, $, res) => {
    const $a = $('a');
    $('a').each(idx => {
      let href = $a.eq(idx).attr('href');
      if(!href) return;

      href = urlType.resolve(url, href);
      href = href.replace(/\#.+$/, '');
      downloadRec(href, level + 1);
    });
    if(url.substr(url.length - 1, 1) == '/') url += 'index.html';

    const savepath = url.split('/').slice(2).join('/');
    checkSaveDir(savepath);
    console.log(savepath);
    fs.writeFileSync(savepath, $.html());
  });
};

const checkSaveDir = fname => {
  const dir = path.dirname(fname);
  const dirlist = dir.split('/');
  let p = '';
  for(let i in dirlist) {
    p += dirlist[i] + '/';
    if(!fs.existsSync(p)) fs.mkdirSync(p);
  }
};

downloadRec(TARGET_URL, 0);
