const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "M94Husen",
  database: "vacation_db"
});

module.exports = connection;
