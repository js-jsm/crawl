const xml2js = require('xml2js');
const obj = {
  item: {
    name: 'Banana',
    price: 150
  }
};
const builder = new xml2js.Builder();
const xml = builder.buildObject(obj);
console.log(xml);
