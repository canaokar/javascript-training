const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pa55word",
  database: "blog",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});

// POST /user
// Insert a new user into the users table
app.post("/user", (req, res) => {
  // TODO: Insert user
});

// POST /user/:id/post
// Insert a post with user_id as foreign key
app.post("/user/:id/post", (req, res) => {
  // TODO: Insert post
});

// GET /user/:id/posts
// Return posts created by a specific user
app.get("/user/:id/posts", (req, res) => {
  // TODO: Fetch posts by user
});

// GET /posts
// Return all posts with user info (JOIN)
app.get("/posts", (req, res) => {
  // TODO: Fetch posts with user info
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
