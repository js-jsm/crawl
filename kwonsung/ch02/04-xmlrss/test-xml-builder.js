const xml2js = require('xml2js');
const builder = new xml2js.Builder();
const obj = {
  item: {
    name: 'Banana',
    price: 150
  }
};
const xml = builder.buildObject(obj);

console.log(xml);