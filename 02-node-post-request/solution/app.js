const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// POST /submit
app.post("/submit", (req, res) => {
  const { name, email } = req.body; // Extract data from request body
  res.json({ message: `Received submission from ${name} with email ${email}` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
