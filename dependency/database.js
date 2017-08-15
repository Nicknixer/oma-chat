let mysql = require('mysql'),
    config = require('../config.json');

let db = mysql.createConnection(config.database);

db.connect((error) => {
    if (error) throw error;
});

module.exports = db;
