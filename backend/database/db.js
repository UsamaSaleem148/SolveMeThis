const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'solvemethis'
});

mysqlConnection.connect((err) => {
    if (err) throw err;
});

module.exports = mysqlConnection;