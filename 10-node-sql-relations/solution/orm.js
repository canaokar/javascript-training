const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const port = 3000;

app.use(express.json());

const sequelize = new Sequelize("blog", "root", "pa55word", {
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

// Define Post model
const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Define relationships
User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

// Sync models with database
sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Database sync error:", err);
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

// POST /user/:id/post
app.post("/user/:id/post", async (req, res) => {
  try {
    const { title, content } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const post = await Post.create({ title, content, user_id: user.id });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: "Failed to create post" });
  }
});

// GET /user/:id/posts
app.get("/user/:id/posts", async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { user_id: req.params.id },
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// GET /posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, attributes: ["name", "email"] }],
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts with users" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
