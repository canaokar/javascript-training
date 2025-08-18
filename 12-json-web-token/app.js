const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('./users');
const authenticateToken = require('./middleware/auth');
require('dotenv').config();

const app = express();
app.use(express.json());

// TODO: Implement /login endpoint
app.post('/login', (req, res) => {
  // 1. Get username and password from req.body

  // 2. Find user with matching credentials

  // 3. If not found, return 401

  // 4. If found, create JWT with payload and send it
});

// TODO: Implement /protected route
app.get('/protected', authenticateToken, (req, res) => {
  // Return a message using req.user
});

const PORT = 3000;
app.listen(PORT, () => console.log(`JWT Demo running on http://localhost:${PORT}`));
