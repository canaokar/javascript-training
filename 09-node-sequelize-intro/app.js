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
// Should return the current user object
app.get("/user", async (req, res) => {
  // TODO: Fetch and return a user from the database
});

// POST /user
// Should create a new user from req.body
app.post("/user", async (req, res) => {
  // TODO: Create and return new user
});

// PUT /user/:id
// Should replace a user with data from req.body
app.put("/user/:id", async (req, res) => {
  // TODO: Replace user by ID
});

// PATCH /user/:id
// Should update only the fields provided
app.patch("/user/:id", async (req, res) => {
  // TODO: Partially update user
});

// DELETE /user/:id
// Should delete the user by ID
app.delete("/user/:id", async (req, res) => {
  // TODO: Delete user by ID
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
