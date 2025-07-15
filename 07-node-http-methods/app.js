const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// In-memory user object
let user = {
  name: "Test User",
  email: "test@example.com",
};

// TODO: Implement GET /user
// Should return the current user object

// TODO: Implement POST /user
// Should replace the user with data from req.body

// TODO: Implement PUT /user
// Should do the same as POST (full replace)

// TODO: Implement PATCH /user
// Should update only the fields provided in req.body

// TODO: Implement DELETE /user
// Should clear the user (set to null or {})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
