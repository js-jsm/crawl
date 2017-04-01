const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test.sqlite');


db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS items(name, value)');
  const stmt = db.prepare('INSERT INTO items VALUES(?, ?)');
  stmt.run(['Banana', 300]);
  stmt.run(['Apple', 200]);
  stmt.run(['Kiwi', 100]);
  stmt.finalize();

  db.each('SELECT * FROM items', (err, row) => {
    console.log(`${row.name}: ${row.value}`);
  });
});
db.close();