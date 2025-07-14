// Import the Express module
const express = require("express");

// Create an Express application
const app = express();

// Define the port on which the server will listen
const port = 3000;

// Define a route handler for GET requests to the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send "Hello, World!" as the response
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
