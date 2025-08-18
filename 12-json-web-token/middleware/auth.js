const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  // TODO: Extract token from Authorization header
  const token = null;

  // TODO: Handle missing token
  if (false) return res.status(401).json({ error: 'Missing token' });

  // TODO: Verify token using JWT_SECRET
  jwt.verify(/* token, secret, callback */);

  // TODO: Set user to req.user and call next()
}

module.exports = authenticateToken;
