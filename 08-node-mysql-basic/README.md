# 08 - Connect Node.js to MySQL with Docker

This module shows how to connect a Node.js app to a MySQL database using `mysql2` and Docker.

## Setup

Start MySQL using Docker:

```bash
docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=myPa$$word -e MYSQL_DATABASE=car -p 3306:3306 -d mysql:latest
```

## What You'll Learn

- How to connect to MySQL from Node.js
- How to create tables and insert data
- How to perform basic SELECT and INSERT queries

## Folder Structure

- `app.js` — Exercise version with TODOs
- `solution/app.js` — Complete working code
- `mysql.rest` — REST Client test file

## How to Run

```bash
npm install
node solution/app.js
```

Use REST Client in VS Code to run each block in `mysql.rest`.
