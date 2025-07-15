# 10 - SQL Relationships (No ORM)

This module shows how to build one-to-many relationships using raw SQL and the `mysql2` driver.

## What You'll Learn

- How to manually handle SQL relationships
- How to perform JOIN queries
- How to insert and query relational data

## MySQL Setup

```bash
docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=pa55word -e MYSQL_DATABASE=blog -p 3306:3306 -d mysql:latest
```

## Schema to Run

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Files

- `app.js` — Exercise with TODOs
- `solution/app.js` — Full working code
- `blog.rest` — Test file

## Run the App

```bash
npm install
node solution/app.js
```

Test with REST Client using `blog.rest`.
