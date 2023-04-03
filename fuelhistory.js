const mysql = require('mysql');

// Set up database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

// Connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Select history data from table
const sql = 'SELECT date, GR, DA, DD, SPG, T FROM history';
connection.query(sql, (err, results, fields) => {
  if (err) throw err;

  // Iterate over results and call addHistory for each row
  results.forEach((row) => {
    const { date, GR, DA, DD, SPG, T } = row;
    addHistory(date, GR, DA, DD, SPG, T);
  });
});

// Close database connection
connection.end();

function addHistory(date, GR, DA, DD, SPG, T) {
	let row = document.getElementById("History").insertRow(-1);
	
	row.insertCell(0).innerText = date;
	row.insertCell(1).innerText = GR;
	row.insertCell(2).innerText = DA;
	row.insertCell(3).innerText = DD;
	row.insertCell(4).innerText = SPG;
	row.insertCell(5).innerText = T;
}
