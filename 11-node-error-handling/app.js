const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Sample GET route
app.get("/", (req, res) => {
  res.send("Welcome to the error handling demo!");
});

// TODO: Add a route /error that simulates an error

// TODO: Add a catch-all 404 handler

// TODO: Add a global error-handling middleware

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
