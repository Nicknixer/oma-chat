let mysql = require('mysql');

let db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
});

db.connect();

module.exports = db;
