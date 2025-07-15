const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// In-memory "database"
let users = {};

// GET /user/:id - Get a single user
app.get("/user/:id", (req, res) => {
  const user = users[req.params.id];
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// POST /user - Add a new user with a unique userId
app.post("/user", (req, res) => {
  const { userId, name, email } = req.body;
  if (!userId || !name || !email) {
    return res
      .status(400)
      .json({ error: "userId, name, and email are required" });
  }
  if (users[userId]) {
    return res.status(409).json({ error: "User ID already exists" });
  }

  users[userId] = { name, email };
  res.status(201).json({ message: "User created", user: users[userId] });
});

// PUT /user/:id - Replace an existing user
app.put("/user/:id", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }
  users[req.params.id] = { name, email };
  res.json({ message: "User replaced", user: users[req.params.id] });
});

// PATCH /user/:id - Update part of a user
app.patch("/user/:id", (req, res) => {
  if (!users[req.params.id]) {
    return res.status(404).json({ error: "User not found" });
  }
  users[req.params.id] = { ...users[req.params.id], ...req.body };
  res.json({ message: "User updated", user: users[req.params.id] });
});

// DELETE /user/:id - Remove a user
app.delete("/user/:id", (req, res) => {
  if (!users[req.params.id]) {
    return res.status(404).json({ error: "User not found" });
  }
  delete users[req.params.id];
  res.json({ message: "User deleted" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
