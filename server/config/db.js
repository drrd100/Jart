const dotenv = require('dotenv');
dotenv.config();

const mysql = require("mysql");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWORD,
    database: process.env.DB_DATABASE,
})
const db = (callback) => {
    pool.getConnection((err,conn) => {
        if(!err){
            console.log("모듈 연결성공")
            callback(conn)
        }
    });
}

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PSWORD,
//     database: process.env.DB_DATABASE,
// });

module.exports = db;