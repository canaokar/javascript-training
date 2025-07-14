const express = require("express");
const app = express();
const port = 3000;

// Enable JSON parsing for incoming requests
app.use(express.json());

// TODO: Create a POST route on "/submit"
// Extract 'name' and 'email' from the request body (assume JSON input)
// Respond with a JSON message confirming the received data
// Example: { "message": "Received submission from Alice with email alice@example.com" }

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
