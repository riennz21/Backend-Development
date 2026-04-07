const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dzaky1001',
    database: 'crud_user'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});
module.exports = conn;