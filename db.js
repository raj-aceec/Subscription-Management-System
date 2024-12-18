const mysql = require('mysql');
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "raj1234",
  database: "hackathon",
});
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:');
    return;
  }
  console.log('Connected to the database');
});
module.exports = db;
