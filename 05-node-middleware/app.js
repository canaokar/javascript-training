// const express = require("express");
// const app = express();
// const port = 3000;

// // TODO: Write a middleware that sets req.requestTime to the current timestamp
// // Use new Date().toISOString()
// // Apply this middleware using app.use()

// app.get("/greet", (req, res) => {
//   // TODO: Use req.requestTime in the response
//   res.send("Hello!"); // Replace this with a message that includes requestTime
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
const express = require("express");
const app = express();
const port = 3000;

// Middleware to add request time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get("/greet", (req, res) => {
  res.send(`Hello! You made this request at ${req.requestTime}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
