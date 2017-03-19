const fs    = require('fs'),
	  CSV   = require('comma-separated-values'),
	  txt = 'id,name,price\r\n' + '1001,Banana,300\r\n' + '1002,Apple,230\r\n',
	  csv = new CSV(txt, {
		  header:true
	  }),
	  records = csv.parse();

console.log(records);
