const FILE_DIC = 'bot-dic.dat';
const MONGO_DSN = 'mongodb://localhost:27017/simple-bot';
let mongoDB;

const mongoClient = require('mongodb').MongoClient;
const fs = require('fs');

const insertKeywords = collection => {
    let cnt = 0;
    let dataCount = 0;
    const lines = fs.readFileSync(FILE_DIC, 'utf-8').split('\n');
    lines.forEach(line => {
        const l = line.trim();
        if(l === ''|| l.substr(0, 1) === ';') {
            return;
        }
        console.log(l);
        const [
            key,
            pat,
            msg
        ] = l.split(',').map(v => v.trim());

        collection.insert({
            key,
            pattern: pat,
            msg
        }, (err, res) => {
            console.log(`${cnt} : inserted - key: ${res.ops[0].key}, pattern: ${res.ops[0].pattern}, msg: ${res.ops[0].msg}`);
            if(++cnt === dataCount) {
                console.log('Done!');
                mongoDB.close();
            }
        });
        dataCount++;
    });
};

mongoClient.connect(MONGO_DSN, (err, db) => {
    if(err) {
        console.log('DB error!', err);
        return;
    }
    mongoDB = db;
    const collection = db.collection('keywords');
    collection.drop(() => {
        insertKeywords(collection);
    });
});
