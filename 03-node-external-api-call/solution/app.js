const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

// GET /joke - fetches a random joke from an external API
app.get("/joke", async (req, res) => {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = response.data;
    res.json({ joke: `${joke.setup} ${joke.punchline}` });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch joke" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
