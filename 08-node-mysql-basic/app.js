const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// In-memory user object
let user = {
  name: "Test User",
  email: "test@example.com",
};

// GET /user
// Should return the current user object
app.get("/user", (req, res) => {
  // TODO: Return the user object
});

// POST /user
// Should replace the user with data from req.body
app.post("/user", (req, res) => {
  // TODO: Replace the user object
});

// PUT /user
// Should do the same as POST (full replace)
app.put("/user", (req, res) => {
  // TODO: Replace the user object
});

// PATCH /user
// Should update only the fields provided in req.body
app.patch("/user", (req, res) => {
  // TODO: Partially update the user object
});

// DELETE /user
// Should clear the user (set to null or empty object)
app.delete("/user", (req, res) => {
  // TODO: Clear the user object
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
