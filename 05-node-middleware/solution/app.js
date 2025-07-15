const express = require('express');
const app = express();
const port = 3000;

// Middleware to add request time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get('/greet', (req, res) => {
  res.send(`Hello! You made this request at ${req.requestTime}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
