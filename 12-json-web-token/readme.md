# JSON Web Token Exercise

This is a simple exercise to understand how JWT authentication works in a Node.js Express application — without using Cognito or any cloud-based auth.

---

## 📁 Structure

```
12-json-web-token/
├── solution/           # Full working version
├── middleware/
├── app.js              # Main app with blanks to fill
├── users.js            # Hardcoded user DB
├── .env                # JWT secret
├── package.json
├── test.rest           # REST client test file
└── readme.md
```

---

## 🚀 Your Task

1. Complete the `app.js` and `middleware/auth.js` files.
2. Use the `.env` file for the JWT secret.
3. Use `jsonwebtoken.sign` and `verify` to implement JWT authentication.
4. Test using the `test.rest` file in REST Client or Postman.

---

## ✅ To Run

```bash
npm install
node app.js
```

---
Happy token-ing! 🪙
