const express = require("express");
const app = express();
const port = 3000;

// Example: GET /greet/Chinmay => "Hello, Chinmay!"
app.get("/greet/:name", (req, res) => {
  const name = req.params.name; // Extract 'name' from the URL
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
