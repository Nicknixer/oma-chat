let db = require('./dependency/database.js');

console.log('Creating tables');

db.query(
    "DROP TABLE IF EXISTS `messages`;",
    error => {
        if (error) throw error;

        console.log('message dropped');


    });

db.query(
    "CREATE TABLE messages (id int(11) NOT NULL AUTO_INCREMENT, name varchar(100) NOT NULL, message text NOT NULL, date datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;",
    error => {
    if (error) throw error;

    console.log('message created');
    process.exit();
});
