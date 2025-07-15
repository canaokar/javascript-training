# 04 - Query Parameters + External API

This module combines query parameter handling with an external API call to OpenWeatherMap.

## What You'll Learn

- How to access `req.query`
- How to call an external API using `axios`
- How to extract and send a meaningful response

## Folder Structure

- `app.js` — Exercise file with TODOs
- `solution/app.js` — Complete solution using OpenWeatherMap
- `weather.rest` — Test file for REST Client

## How to Run

1. Replace `YOUR_API_KEY` in `solution/app.js` with your actual OpenWeatherMap API key.
2. Then run:

```bash
npm install
node solution/app.js
```

## How to Test

Use the REST Client in VS Code or this example:

```
GET http://localhost:3000/weather?city=London&unit=metric
```

## Notes

- Valid units: `metric`, `imperial`, or `standard`
- You need a free API key from https://openweathermap.org/api
