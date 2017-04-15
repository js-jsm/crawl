const Mecab = require('../../ch05/02-mecab/meacb-mod');
const mecab = new Mecab();
const mongo_client = require('mongodb').MongoClient;

const MONGO_DSN = 'mongodb://localhost:27017/simple-bot';
let mongo_db = null;
let keywords_co;

class Bot {
  constructor(msg, cb) {
    this.msg = msg;
    this.cb = cb;
    this.results = [];
    this.words = [];
    this.index = 0;
  }

  response() {
    let res = '좀 더 쉽게 말씀해주세요.';
    if(this.results.length) res = this.results.join('.');
    this.cb(res)
  }

  nextWord() {
    if(this.index >= this.words.length) return this.response();

    const w = this.words[this.index++];
    const org = w[0];
    keywords_co.find({key: org}).toArray((err, rows) => {
      if(rows.length === 0) return this.nextWord();

      const keys = rows.filter((v => {
        if(v.pattern === '*') {
          return true;
        }
        if(this.msg.indexOf(v.pattern) >= 0) {
          return true;
        }
        return false;
      }));

      if(keys.length > 0) {
        const r = Math.floor(Math.random() * keys.length);
        const key = keys[r];
        console.log(key);
        this.results.push(key.msg);
      }
      this.response();
    });
  }

  talk() {
    mecab.parse(this.msg, words => {
      this.index = 0;
      this.words = words;
      this.nextWord();
    });
  }
}

const checkDB = cb => {
  if(mongo_db) return cb();

  mongo_client.connect(MONGO_DSN, (err, db) => {
    if(err) return console.log('DB error', err);

    mongo_db = db;
    keywords_co = db.collection('keywords');
    cb();
  });
};

module.exports = {
  getResponse: (msg, cb) => {
    checkDB(() => {
      const bot = new Bot(msg, cb);
      bot.talk();
    })
  }
};
