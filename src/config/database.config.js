const mysql = require("mysql2");
require("dotenv").config();

//Khai báo các thông tin kết nối

const connection = mysql.createPool({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
});

module.exports = connection.promise();
