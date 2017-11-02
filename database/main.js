var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'dev'
});

//connection.connect()

connection.connect(function(err) {
  if(err){
    console.log('Error connecting to Db');
    return;
  }else{
    console.log('Database Connection established')
  } 
});


// connection.query("SELECT * FROM  billseries", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

// connection.query('SELECT * FROM billseries',function(err,rows){
//   if(err) throw err;
//   console.log('Data received from Db:\n');
//   console.log(rows);
// });

module.exports = connection;

//connection.end();