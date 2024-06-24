const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'NodeOfSql',
    password: 'Nick@root21'
});

module.exports = pool.promise();