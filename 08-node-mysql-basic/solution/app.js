const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "myPa$$word",
  database: "car",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database");
});

app.get("/init-db", (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS cars (
      id INT AUTO_INCREMENT PRIMARY KEY,
      car_name VARCHAR(255) NOT NULL,
      color VARCHAR(255) NOT NULL
    )
  `;
  db.query(createTableQuery, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      message: "Database initialized and table created (if not exists)",
    });
  });
});

app.get("/list", (req, res) => {
  const query = "SELECT * FROM cars";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post("/insert", (req, res) => {
  const { car_name, color } = req.body;
  if (!car_name || !color) {
    return res
      .status(400)
      .json({ error: "Please provide both car name and color" });
  }

  const query = "INSERT INTO cars (car_name, color) VALUES (?, ?)";
  db.query(query, [car_name, color], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res
      .status(201)
      .json({ message: "Car added successfully", id: result.insertId });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
