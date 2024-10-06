const mysql = require('mysql2');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'foodlink'
});

module.exports = conection;