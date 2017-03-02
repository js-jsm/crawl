const xml2js  = require('xml2js'),
      obj     = {
          item: {
              name:  'Banana',
              price: 150
          }
      },
      builder = new xml2js.Builder(),
      xml     = builder.buildObject(obj);

console.log(xml);