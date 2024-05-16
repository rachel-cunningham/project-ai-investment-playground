const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    jwt.verify(token, process.env.API_SECRET_KEY, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized", isAuthenticated: false })
        }

        req.user = { userId: decodedToken.userId }
        next()
    })
}

module.exports = authenticateToken