const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("../users/users.service");

async function login(req, res) {
    try {
        const { username, password } = req.body;

        const user = await service.readUser(username);
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password_hash);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const token = jwt.sign({ userId: user.user_id }, process.env.API_SECRET_KEY, { expiresIn: "1h" });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    login: [asyncErrorBoundary(login)]
};
