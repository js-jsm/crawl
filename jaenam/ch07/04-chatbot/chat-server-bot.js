const MONGO_DSN = 'mongodb://localhost:27017/simple-bot';
const Mecab = require('./mecab-mod');
const mecab = new Mecab();
const mongoClient = require('mongodb').MongoClient;

let mongoDB = null;
let keywordCollection;

const checkDB = nextFunc => {
    if(mongoDB) {
        nextFunc();
        return;
    }
    mongoClient.connect(MONGO_DSN, (err, db) => {
        if(err) {
            console.log('DB error!', err);
            return;
        }
        mongoDB = db;
        keywordCollection = db.collection('keywords');
        nextFunc();
    });
};

class Bot {
    constructor(msg, callback) {
        this.callback = callback;
        this.msg = msg;
        this.result = [];
        this.words = [];
        this.index = 0;
        this.nextWord = this.nextWord.bind(this);
        this.response = this.response.bind(this);
    }
    talk() {
        mecab.parse(this.msg, words => {
            this.index = 0;
            this.words = words;
            this.nextWord();
        });
    }
    nextWord() {
        if(this.index >= this.words.length) {
            this.response();
            return;
        }
        const w = this.words[this.index++];
        console.log('다음단어 : ', w);
        const org = w[0];
        console.log(keywordCollection.find({key: org}));
        keywordCollection.find({key: org}).toArray((err, rows) => {
            console.log(rows);
            if(rows.length === 0) {
                this.nextWord();
                return;
            }
            const keys = rows.filter(el => {
                if(el.pattern === '*' || this.msg.includes(el.pattern)) {
                    return true;
                }
                return false;
            });
            if(keys.length > 0) {
                const r = Math.floor(Math.random() * keys.length);
                this.result.push(keys[r].msg);
            }
            this.response();
        });
    }
    response() {
        this.callback(
            this.result.length > 0 ? this.result.join('.') : '좀 더 쉽게 말씀해 주세요.'
        );
    }
}

const getResponse = (msg, callback) => {
    checkDB(() => {
        const bot = new Bot(msg, callback);
        bot.talk();
    });
};

module.exports = {
    getResponse
};
