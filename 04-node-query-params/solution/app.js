const express = require("express");
const axios = require("axios");
require('dotenv').config();

const app = express();

// Get API key from environment variables, so that you don't expose it in your code
const API_KEY = process.env.WEATHER_API_KEY;

app.get("/weather", async (req, res) => {
  const { city, unit } = req.query;

  if (!city || !unit) {
    return res
      .status(400)
      .json({ error: "Missing city or unit query parameter" });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=${unit}&appid=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    res.json({
      city: data.name,
      temperature: data.main.temp,
      unit,
      description: data.weather[0].description,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
