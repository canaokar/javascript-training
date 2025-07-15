const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const port = 3000;

app.use(express.json());

// Sequelize initialization
const sequelize = new Sequelize("car", "root", "pa55word", {
  host: "localhost",
  dialect: "mysql",
});

// Define User model
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });

// GET /user
app.get("/user", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// POST /user
app.post("/user", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: "Failed to create user" });
  }
});

// PUT /user/:id
app.put("/user/:id", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    await user.update({ name, email });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "Failed to update user" });
  }
});

// PATCH /user/:id
app.patch("/user/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "Failed to patch user" });
  }
});

// DELETE /user/:id
app.delete("/user/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    await user.destroy();
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete user" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
