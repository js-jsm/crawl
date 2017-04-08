const sqlite3 = require('sqlite3').verbose(),
      db      = new sqlite3.Database('test.sqlite');

db.serialize(function () {
    db.run('CREATE TABLE IF NOT EXISTS items(name, value)');

    const psmt = db.prepare(`
        INSERT INTO 
            items 
        VALUES(
            ?, 
            ?
        )`
    );

    psmt
        .run(['Banana', 300])
        .run(['Apple', 150])
        .run(['Mango', 250])
        .finalize();

    // 데이터 조회
    db.each('SELECT * FROM items', function (err, row) {
        console.log(row.name + ':' + row.value);
    });
});

db.close();