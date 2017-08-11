let mysql = require('mysql');
let config = require('../config.json');

let dbParams = config.database;

let db = mysql.createConnection({
  host     : dbParams.host,
  user     : dbParams.user,
  password : dbParams.password,
  database : dbParams.database
});

db.connect();

module.exports = db;
