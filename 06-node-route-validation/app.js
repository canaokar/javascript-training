const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// TODO: Create a POST route at "/register"
// Extract 'name' and 'email' from req.body
// Validate that both fields exist
// If missing, return a 400 error with a helpful message
// Otherwise, respond with a success message

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
