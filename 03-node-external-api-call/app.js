const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

// TODO: Create a GET route at "/joke"
// Use axios to fetch a random joke from:
// https://official-joke-api.appspot.com/random_joke
// Respond with the full joke as JSON:
// Example format: { "joke": "Why did the chicken cross the road? To get to the other side!" }

// Handle API errors with a 500 status and a message: "Failed to fetch joke"

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
