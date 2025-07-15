const express = require("express");
const app = express();
const port = 3000;

// TODO: Create a GET route at /weather
// Read query parameters 'city' and 'unit' from req.query
// Respond with a message like:
// "Weather for London in celsius"
// If either query parameter is missing, return a 400 error with a helpful message

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
