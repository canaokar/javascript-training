# 02 - Handling POST Requests

This module introduces handling POST requests and parsing JSON bodies in Express.

## You Will Learn

- How to use `express.json()` middleware
- How to handle POST data sent as JSON
- How to return a confirmation response

## Folder Structure

- `solution/app.js` — Full working example with response formatting.
- `app.js` — Contains structure and TODOs.
- `submit.rest` — A ready-to-use POST request with sample data.

## How to Run

```bash
npm install
node app.js
```

## How to Test

Run the following request using the REST Client:

```
POST http://localhost:3000/submit
Content-Type: application/json

{
  "name": "John",
  "email": "john@doe.com"
}
```
