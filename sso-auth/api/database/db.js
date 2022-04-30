const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0d950d22",
  database: "test4",
  multipleStatements: true,
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("connected...");
  }
});

module.exports = connection;
