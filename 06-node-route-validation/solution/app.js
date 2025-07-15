const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/register', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Both name and email are required.' });
  }

  res.json({ message: `User ${name} registered with email ${email}` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
