const client = require('cheerio-httpcli');
const Request = require('request');
const urlType = require('url');
const fs = require('fs');
const path = require('path');

const LINK_LEVEL = 3;
const TARGET_URL = 'https://nodejs.org/dist/latest-v6.x/docs/api/';
const list = {};

// 저장할 디렉터리 존재 유무 확인
const checkSaveDir = fname => {
  // 디렉토리 부분만 검출
  const dir = path.dirname(fname);

  // 디렉터리를 재귀적으로 생성
  const dirlist = dir.split('/');
  let p = '';

  for(const i in dirlist) {
    p += dirlist[i] + '/';
    if(!fs.existsSync(p)) fs.mkdirSync(p);
  }
};

const downloadRec = (url, level) => {
  if(level >= LINK_LEVEL) return;

  // 이미 다운받은 사이트 무시
  if(list[url]) return;
  list[url] = true;

  // 외부 페이지 무시
  const us = TARGET_URL.split('/');
  us.pop();
  const base = us.join('/');
  if(!~url.indexOf(base)) return;

  client.fetch(url, {}, function(err, $, res) {
    $('a').each(function() {
      let href = $(this).attr('href');
      if(!href) return;
      href = urlType.resolve(url, href);
      href = href.replace(/#.+$/, '');
      downloadRec(href, level + 1);
    });

    if(url.substr(url.length-1, 1) === '/') {
      url += 'index.html';
    }
    const savepath = url.split('/').slice(2).join('/');
    checkSaveDir(savepath);
    console.log(savepath);
    fs.writeFileSync(savepath, $.html());
  });
};

downloadRec(TARGET_URL, 0);