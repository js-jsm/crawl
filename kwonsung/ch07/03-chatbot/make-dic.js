const mongo_client = require('mongodb').MongoClient;
const fs =require('fs');

const FILE_DIC = 'bot-dic.dat';
const MONGO_DSN = 'mongodb://localhost:27017/simple-bot';
let mongo_db;

const trim = txt => (''+txt).replace(/(^\s+|\s+$)/g, '');

const insertKeywords = collection => {
  let cnt = 0, dataCnt = 0;
  const txt = fs.readFileSync(FILE_DIC, 'utf-8');
  const lines = txt.split('\n');

  for(const i in lines) {
    const line = trim(lines[i]);
    if(!line) continue;
    if(line.substr(0, 1) === ';') continue;

    const cells = line.split(',');
    const key = trim(cells[0]);
    const pattern = trim(cells[1]);
    const msg = trim(cells[2]);

    collection.insert({
      key, pattern, msg
    }, (err, res) =>{
      console.log(`${cnt}:inserted:${res.ops}`);
      if(++cnt === dataCnt) {
        console.log('done');
        mongo_db.close();
      }
    });
    dataCnt++;
  }
};

mongo_client.connect(MONGO_DSN, (err, db) => {
  if(err) return console.log('DB Error', err);
  mongo_db =db;

  const collection = db.collection('keywords');

  collection.drop((err, reply) => {
    insertKeywords(collection);
  })
});
