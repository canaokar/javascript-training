# 09 - Sequelize ORM with MySQL

This module introduces Sequelize ORM in a Node.js app to interact with a MySQL database.

## What You'll Learn

- How to initialize Sequelize
- How to define models
- How to use async/await for database operations
- Basic CRUD operations using an ORM

## Prerequisites

Start MySQL using Docker:

```bash
docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=pa55word -e MYSQL_DATABASE=car -p 3306:3306 -d mysql:latest
```

## How to Run

```bash
npm install express sequelize mysql2
node app.js
```

## Files

- `app.js` — Sequelize example with route stubs
- `user.rest` — REST Client requests for testing

