const express = require("express");
const app = express();
const port = 3000;

// TODO: Create a GET route on "/greet/:name"
// Extract 'name' from the URL parameters
// Respond with a message like "Hello, Chinmay!"

// Example: If the user visits /greet/Alex, respond with "Hello, Alex!"

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
