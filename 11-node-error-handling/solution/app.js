const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Sample GET route
app.get("/", (req, res) => {
  res.send("Welcome to the error handling demo!");
});

// Route that simulates an error
app.get("/error", (req, res, next) => {
  const err = new Error("This is a simulated error");
  err.status = 500;
  next(err);
});

// Catch-all 404 handler
app.use((req, res, next) => {
  const err = new Error("Route not found");
  err.status = 404;
  next(err);
});

// Global error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
