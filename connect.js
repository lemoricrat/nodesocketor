var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'nakad',
  database : 'user'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM `userpass` ', function (error, results, fields) {
        
	var temp = JSON.stringify(results[0]);
	console.log('stringify temp = '+temp);
	var json = JSON.parse(temp);
	console.log(json.username);
	
	process.exit();

})

