# 05 - Custom Middleware in Express

This module demonstrates how middleware can modify the request object.

## What You'll Learn

- How to write custom middleware
- How to attach data to `req` (e.g., `req.requestTime`)
- How middleware fits into the Express request flow

## Folder Structure

- `app.js` — Exercise with TODOs
- `solution/app.js` — Completed version using middleware to add timestamp
- `requests/weather.rest` — Test request for verifying middleware behavior

## How to Run

```bash
npm install
node solution/app.js
```

## How to Test

Use the REST Client in VS Code or visit:

```
GET http://localhost:3000/greet
```

You should see a message like:

```
Hello! You made this request at 2025-07-15T11:10:00.000Z
```
