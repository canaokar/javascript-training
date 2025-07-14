# 03 - Making External API Calls

This module covers how to make an external HTTP request using `axios` and return the result in an Express route.

## You Will Learn

- How to use `axios` to call external APIs
- How to work with async/await
- How to handle errors gracefully

## Folder Structure

- `solution/app.js` — Complete code that fetches a joke from an external API.
- `app.js` — Includes TODOs for you to implement the logic.
- `joke.rest` — REST request to trigger the external API call.

## How to Run

```bash
npm install
node app.js
```

## How to Test

Use the REST Client to run:

```
GET http://localhost:3000/joke
```

It should return a JSON response with a random joke.
