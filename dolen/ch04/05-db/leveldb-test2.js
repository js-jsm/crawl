const db = require('level')('./testDB2', { valueEncoding:'json' });

const testKeys = () => {
    console.log('keys:');

    db.createKeyStream()
      .on('data', key => console.log(' - ' + key))
      .on('end', testKeyValues);
}

const testKeyValues = () => {
    console.log('\nkey-value-list:');

    db.createReadStream()
      .on('data', data => console.log(`
            + key = ${data.key}
            | color= ${data.value.color}
            | price= ${data.value.price}
      `))
      .on('end', testSearch);
}

const testSearch = () => {
    console.log('\nrange-search:');

    const searchOption = {
        gte: 'fruits!',
        lte: 'fruits!choco'
    };

    db.createReadStream(searchOption)
      .on('data', data => console.log('+ key=' + data.key))
      .on('end', console.log('ok'));
}

db.batch()
  .put('fruits!apple', {
      name:  'Apple',
      price: 300,
      color: 'red'
  })
  .put('fruits!orange', {
      name:  'Orange',
      price: 180,
      color: 'orange'
  })
  .put('fruits!banana', {
      name:  'Banana',
      price: 200,
      color: 'yellow'
  })
  .put('fruits!kiwi', {
      name:  'Kiwi',
      price: 220,
      color: 'green'
  })
  .put('snack!poteto', {
      name:  'Poteto-Snack',
      price: 340,
      color: 'brown'
  })
  .put('snack!choco', {
      name:  'Choco-Snack',
      price: 220,
      color: 'black'
  })
  .write(testKeys);