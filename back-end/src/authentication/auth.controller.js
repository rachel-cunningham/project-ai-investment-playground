const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");
const service = require("../users/users.service");

async function login(req, res) {
    try {
        const { username, password } = req.body

        const user = await service.readUser(username)
        console.log(user)
        if (!user) {
          return res.status(401).json({ message: 'Invalid username or password' })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password_hash)

        if (!isPasswordValid) {
          return res.status(401).json({ message: "Invalid username or password" })
        }

        const token = jwt.sign({ userId: user.id }, "your_secret_key", { expiresIn: "1h" })

        res.status(200).json({ token })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}


function authenticateToken(req, res, next) {
  const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, "your_secret_key", (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = { userId: decodedToken.userId };
    next();
  });
}


module.exports = {
    login: [asyncErrorBoundary(login)],
    authenticateToken
}